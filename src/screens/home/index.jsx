import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';
import UserAvatar from 'react-native-user-avatar';
import { useNavigation } from "@react-navigation/native";
import Icons from 'react-native-vector-icons/Ionicons';
import Search from '../../components/search';
import BookCard from '../../components/bookCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useUser } from '../../components/context';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user } = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const userName = user?.displayName || user?.email || 'User';

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const auth = getAuth();
    const handleLogout = async () => {
        setLoading(true);
        try {
            await auth.signOut();
            navigation.navigate('SignIn');
        } catch (error) {
            console.error('Logout Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Icons
                    name="reorder-three-outline"
                    size={50}
                    color="#f59d05"
                    style={styles.icon}
                />
                <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
                    <UserAvatar size={50} name={userName} />
                </TouchableOpacity>
            </View>

            {dropdownVisible && (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={handleLogout} disabled={loading}>
                        <Text style={styles.dropdownItem}>{loading ? 'Logging out...' : 'Logout'}</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View>
                <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
                <Text style={styles.text}>What do you want to read today?</Text>
            </View>

            <View style={styles.searchContainer}>
                <Search icon='search' onSearch={handleSearch} />
                <TouchableOpacity onPress={() => navigation.navigate('BookPublish')}>
                    <Icon name='plus-circle' size={28} color="#f59d05" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View><Text style={styles.heading}>New Arrivals</Text></View>
            <View><BookCard searchQuery={searchQuery} /></View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 15,
    },
    welcomeText: {
        fontSize: 18,
        color: '#333',
        marginHorizontal: 15,
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    icon: {},
    searchContainer: {
        marginTop: 10,
        color: "gray",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        marginHorizontal: 15,
        color: "black",
        fontSize: 28,
    },
    heading: {
        fontSize: 24,
        fontWeight: '500',
        color: "#131212",
        marginHorizontal: 20,
    },
    dropdown: {
        position: 'absolute',
        right: 15,
        top: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex: 10,
    },
    dropdownItem: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});
