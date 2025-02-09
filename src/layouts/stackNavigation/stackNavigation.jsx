import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from '../../screens/cameraScreen/cameraScreen';
import PollScreen from '../../screens/pollScreen/pollScreen';
import QuoteScreen from '../../screens/quoteScreen/quoteScreen';
import BottomNavigation from '../tabNavigation/tabNavigation';
import ImageShow from '../../screens/imageShow/imageShow';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator
            // initialRouteName={initialRoute}
            screenOptions={{ headerShown: false }}
        >
               <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="PollScreen" component={PollScreen} />
            <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
            <Stack.Screen name="ImageShow" component={ImageShow} />

        </Stack.Navigator>
    );
};

export default StackNavigation;