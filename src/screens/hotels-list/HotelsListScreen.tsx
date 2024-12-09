import { FlatList, View } from "react-native"
import { styles } from "./styles";
import Hotel from "../../components/Hotel";

const HotelsListScreen: React.FC = () => {
    // mockData
    const hotelsList = [
        {
            name: 'Hilton Garden Inn Manchester Emirates Old Trafford',
            imageSrc: require("../../assets/images/hotel-1.png"),
            distance: '8 mins walking',
            rating: 7.6,
        },
        {
            name: 'Marriott Plaza',
            imageSrc: require("../../assets/images/hotel-2.png"),
            distance: '12 mins walking',
            rating: 9.9,
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={hotelsList}
                renderItem={({ item, index }) => (
                    <View style={index !== 0 && { marginTop: 12 }}>
                        <Hotel data={item} />
                    </View>
                )}
            />
        </View>
    )
}

export default HotelsListScreen;