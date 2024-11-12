import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Modal } from 'react-native';
import { getAuth, updateProfile, updateEmail, updatePassword } from '@react-native-firebase/auth';
import UserAvatar from 'react-native-user-avatar';
import { useUser } from '../../components/context';

const Profile = () => {
    const { user, setUser } = useUser();
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setEmail(user.email || '');
        }
    }, [user]);

    const handleUpdateProfile = async () => {
        if (user && name !== user.displayName) {
            try {
                await updateProfile(user, { displayName: name });
                setUser({ ...user, displayName: name }); // Update context
                Alert.alert('Profile updated!', 'Your username has been updated.');
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        }
    };

    const handleUpdateEmail = async () => {
        if (user && email !== user.email) {
            try {
                await updateEmail(user, email);
                const updatedUser = await auth.currentUser.reload();
                setUser(updatedUser); // Fetch updated user
                Alert.alert('Email updated!', 'Your email has been updated.');
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        }
    };

    const handleUpdatePassword = async () => {
        if (password) {
            try {
                await updatePassword(user, password);
                Alert.alert('Password updated!', 'Your password has been updated.');
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        await Promise.all([
            handleUpdateProfile(),
            handleUpdateEmail(),
            handleUpdatePassword(),
        ]);
        setModalVisible(false); // Close modal after submission
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.avatarContainer}>
                    <UserAvatar size={80} name={user?.displayName || 'User'} />
                    <Text style={styles.userName}>{name || 'User Name'}</Text>
                    <Text style={styles.userEmail}>{email || 'Email'}</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for updating profile */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.label}>UserName</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Name"
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.label}>Change Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
                            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Update</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userEmail: {
        fontSize: 14,
        color: '#777',
    },
    form: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 100,
    },
    label: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderBottomColor: '#4c4c4d',
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 16,
        marginTop: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#f59d05',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#0f0e0e',
        fontSize: 24,
        fontWeight: '700',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    closeButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#f59d05',
        fontSize: 16,
    },
});
