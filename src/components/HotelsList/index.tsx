import { FlatList, Pressable, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";
import { styles } from "./styles";
import HotelCard from "../HotelCard";

const HotelsList: React.FC = () => {
    // useNavigation
    const navigation = useNavigation<NavigationProp>();

    // mockData
    const hotelsList = [
        {
            id: 1,
            name: 'Hilton Garden Inn Manchester Emirates Old Trafford',
            image_src: require("../../assets/images/hotel-1.png"),
            distance: '8 mins walking',
            price_category: 3,
            rating: 7.6,
        },
        {
            id: 2,
            name: 'Marriott Plaza',
            image_src: require("../../assets/images/hotel-2.png"),
            distance: '12 mins walking',
            price_category: 2,
            rating: 9.9,
        },
        {
            id: 3,
            name: 'Hilton Garden Inn Manchester',
            image_src: require("../../assets/images/hotel-1.png"),
            distance: '12 mins walking',
            price_category: 1,
            rating: 8.9,
        },
        {
            id: 4,
            name: 'Marriott Plaza',
            image_src: require("../../assets/images/hotel-2.png"),
            distance: '12 mins walking',
            price_category: 4,
            rating: 6.9,
        },
    ];

    // functions
    const handlePressHotelCard = (id: number) => {
        navigation.navigate('HotelDetails', { id })
    }

    return (
        <View style={styles.hotelsListContainer}>
            <FlatList
                data={hotelsList}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() => handlePressHotelCard(item.id)}
                        style={index !== 0 && { marginTop: 12 }}
                    >
                        <HotelCard data={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}

export default HotelsList;