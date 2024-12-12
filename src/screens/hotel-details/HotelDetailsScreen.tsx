import { HotelDetailsScreenRoute } from "../../types";
import { Image, ScrollView, StatusBar, Text, View } from "react-native"
import { useHotel } from "../../state/query/hotels/useHotel";
import { styles } from "./styles";
import Button from "../../components/Button";
import typography from "../../assets/styles/typography";
import Back from "../../components/Back";
import Spinner from "react-native-loading-spinner-overlay";

interface Props {
    route: HotelDetailsScreenRoute;
}

const HotelDetailsScreen: React.FC<Props> = ({ route }) => {
    // params
    const { id } = route.params;

    // useQuery
    const { data, isLoading } = useHotel({ id });

    return (
        <View style={styles.hotelDetails}>
            <Spinner visible={isLoading} />
            <StatusBar barStyle="light-content" />
            {data && (
                <>
                    <Back />
                    <Image
                        style={styles.hotelImage}
                        src={data.image_src}
                    />
                    <ScrollView>
                        <View style={styles.hotelInfo}>
                            <Text style={styles.hotelInfoTitle}>
                                {data.name}
                            </Text>
                            <Text style={styles.hotelInfoSubtitle}>Overview</Text>
                            <Text style={styles.hotelInfoDescription}>
                                {data.overview}
                            </Text>
                        </View>
                    </ScrollView>
                    <View style={styles.hotelDetailsFooter}>
                        <Button
                            title='Check availability'
                            url='https://zoftify.com'
                            width='100%'
                            typography={{ ...typography.bodyM.semibold }}
                        />
                    </View>
                </>
            )}
        </View>
    )
}

export default HotelDetailsScreen;