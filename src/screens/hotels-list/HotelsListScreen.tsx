import HotelsList from "../../components/HotelsList";
import FooterMenu from "../../components/FooterMenu";
import { StatusBar, View } from "react-native";
import { styles } from "./styles";

const HotelsListScreen: React.FC = () => {
    return (
        <View style={styles.hotelsScreen}>
            <StatusBar barStyle="dark-content" />
            <HotelsList />
            <FooterMenu />
        </View>
    )
}

export default HotelsListScreen;