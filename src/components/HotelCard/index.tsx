import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import PriceCategory from "../PriceCategory";
import Button from "../Button";
import Distance from "../icons/Distance";
import Star from "../icons/Star";
import typography from "../../assets/styles/typography";
import globalStyles from "../../assets/styles/global-styles";

interface Props {
    data: {
        name: string;
        image_src: string;
        distance: string;
        price_category: number;
        rating: number;
    }
}

const HotelCard: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.hotelBlock}>
            <Image
                style={styles.hotelBlockImage}
                src={data.image_src}
            />
            <View style={styles.hotelBlockInfo}>
                <View style={globalStyles.fullBetween}>
                    <View style={styles.distance}>
                        <Distance />
                        <Text style={styles.distanceText}>{data.distance}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Star />
                        <Text style={styles.ratingNumber}>{data.rating}</Text>
                    </View>
                </View>
                <Text style={styles.hotelBlockInfoTitle} numberOfLines={1}>
                    {data.name}
                </Text>
                <View style={globalStyles.fullBetween}>
                    <View>
                        <View style={styles.dollarBlock}>
                            <PriceCategory category={data.price_category} />
                        </View>
                        <Image source={require("../../assets/images/booking-logo.png")} />
                    </View>
                    <Button
                        title='View prices'
                        url='https://zoftify.com'
                        typography={{ ...typography.bodyS.semibold }}
                    />
                </View>
            </View>
        </View>
    )
}

export default HotelCard;