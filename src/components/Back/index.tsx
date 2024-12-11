import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";
import { styles } from "./styles";
import ArrowLeft from "../icons/ArrowLeft";

const Back: React.FC = () => {
    // useNavigation
    const navigation = useNavigation<NavigationProp>();

    // functions
    const handlePressBack = () => {
        navigation.navigate('HotelsList')
    }

    return (
        <Pressable onPress={handlePressBack} style={styles.back}>
            <ArrowLeft />
        </Pressable>
    )
}

export default Back;