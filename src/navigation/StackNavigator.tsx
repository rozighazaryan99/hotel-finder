import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// screens
import HotelsListScreen from '../screens/hotels-list/HotelsListScreen';
import HotelDetailsScreen from '../screens/hotel-details/HotelDetailsScreen';

// stack
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HotelsList" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="HotelsList"
                    component={HotelsListScreen}
                />
                <Stack.Screen
                    name="HotelDetails"
                    component={HotelDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
