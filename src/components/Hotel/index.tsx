import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";
import globalStyles from "../../assets/styles/global-styles";
import Distance from "../icons/Distance";
import Star from "../icons/Star";
import Dollars from "../icons/Dollars";
import Button from "../Button";

type Props = {
    data: {
        name: string,
        imageSrc: ImageSourcePropType,
        distance: string,
        rating: number,
    }
}

const Hotel: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.hotelBlock}>
            <Image
                style={styles.hotelBlockImage}
                source={data.imageSrc}
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
                            <Dollars />
                        </View>
                        <Image source={require("../../assets/images/booking-logo.png")} />
                    </View>
                    <Button title="View prices" />
                </View>
            </View>
        </View>
    )
}

export default Hotel;