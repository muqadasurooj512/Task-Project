
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5/';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons/';

const SignUP = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('Registered Successfully!');
            } else {
                console.log('User signed Out');
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const handleRegister = async () => {
        if (!email || !password || !userName) {
            return Alert.alert('Please fill in all fields');
        }

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            Alert.alert('Registration Successful.');
            console.log('Registration Successful. Please Login to proceed');

            if (user) {
                await user.updateProfile({
                    displayName: userName,
                });
                navigation.navigate('HomeScreen');
            }
        } catch (error) {
            Alert.alert('Error', error.message);
            console.error(error);
        }
    };

    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Image
                    source={require('../../images/usericon.png')}
                    style={styles.logo}
                />
                <Text style={styles.heading}>SIGNUP PAGE</Text>
                <View style={styles.container}>
                    <Icon name="user-alt" size={20} color="#E8AE4C" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor={"gray"}
                        onChangeText={text => setUserName(text)}
                        value={userName}

                    />
                </View>
                <View style={styles.container}>
                    <Icons name="email" size={20} color="#E8AE4C" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={"gray"}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                </View>
                <View style={styles.container}>
                    <Icon name="lock"color="#E8AE4C" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={"gray"}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                    <Text style={styles.button}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={{ color: "black", fontSize: 18 }}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebbb68',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        height: 45,
        width:250,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
    },
    form: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 40,
        elevation: 5,
        width: '100%',
    },
    button: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonContainer: {
        backgroundColor: '#f59d05',
        borderRadius: 10,
        padding: 12,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 3,
    },
    heading: {
        fontSize: 30,
        color: '#f59d05',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    link: {
        fontWeight: 'bold',
        color: '#f59d05',
        fontSize: 18,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
});


export default SignUP