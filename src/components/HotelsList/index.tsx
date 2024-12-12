import { FlatList, Pressable, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";
import { useHotels } from "../../state/query/hotels/useHotels";
import { styles } from "./styles";
import HotelCard from "../HotelCard";
import Spinner from "react-native-loading-spinner-overlay";

const HotelsList: React.FC = () => {
    // useNavigation
    const navigation = useNavigation<NavigationProp>();

    // useQuery
    const { data, isLoading } = useHotels();

    // functions
    const handlePressHotelCard = (id: number) => {
        navigation.navigate('HotelDetails', { id })
    }

    return (
        <View style={styles.hotelsListContainer}>
            <Spinner visible={isLoading} />
            {data && (
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={() => handlePressHotelCard(item.id)}
                            style={index !== 0 && { marginTop: 12 }}
                        >
                            <HotelCard data={item} />
                        </Pressable>
                    )}
                />
            )}
        </View>
    )
}

export default HotelsList;