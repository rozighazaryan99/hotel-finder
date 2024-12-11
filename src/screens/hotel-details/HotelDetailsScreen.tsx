import { HotelDetailsScreenRoute } from "../../types";
import { Image, ScrollView, StatusBar, Text, View } from "react-native"
import { styles } from "./styles";
import Button from "../../components/Button";
import typography from "../../assets/styles/typography";
import Back from "../../components/Back";

interface Props {
    route: HotelDetailsScreenRoute;
}

const HotelDetailsScreen: React.FC<Props> = ({ route }) => {
    const { id } = route.params;

    return (
        <View style={styles.hotelDetails}>
            <StatusBar barStyle="light-content" />
            <Back />
            <Image
                style={styles.hotelImage}
                source={require("../../assets/images/hotel-2.png")}
            />
            <ScrollView>
                <View style={styles.hotelInfo}>
                    <Text style={styles.hotelInfoTitle}>
                        Hilton Garden Inn Manchester Emirates Old Trafford
                    </Text>
                    <Text style={styles.hotelInfoSubtitle}>Overview</Text>
                    <Text style={styles.hotelInfoDescription}>
                        Welcome to Hilton Garden Inn Manchester Emirates Old Trafford,
                        your premier destination for luxury accommodation in the heart of Manchester.
                        Situated adjacent to the iconic Emirates Old Trafford cricket ground.
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
        </View>
    )
}

export default HotelDetailsScreen;