import { Pressable, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { FooterMenuItem, NavigationProp } from "../../types";
import { styles } from "./styles";
import Home from "../icons/Home";
import Stadiums from "../icons/Stadiums";
import Info from "../icons/Info";
import Phone from "../icons/Phone";
import globalStyles from "../../assets/styles/global-styles";
import colors from "../../assets/styles/colors";

const FooterMenu: React.FC = () => {
    // useNavigation
    const navigation = useNavigation<NavigationProp>();

    // constants
    const menuItems: FooterMenuItem[] = [
        {
            id: 1,
            title: 'Explore',
            icon: <Home active />,
            active: true,
            navigateScreen: 'HotelsList',
        },
        {
            id: 2,
            title: 'Stadiums',
            icon: <Stadiums />,
            navigateScreen: 'HotelsList',
        },
        {
            id: 3,
            title: 'Information',
            icon: <Info />,
            navigateScreen: 'HotelsList',
        },
        {
            id: 4,
            title: 'Contacts',
            icon: <Phone />,
            navigateScreen: 'HotelsList',
        },
    ];

    // functions
    const handlePressMenuItem = (navigateScreen: 'HotelsList') => {
        navigation.navigate(navigateScreen);
    }

    return (
        <View style={styles.footerContainer}>
            <View style={globalStyles.fullBetween}>
                {menuItems.map((item) => (
                    <Pressable
                        key={item.id}
                        style={styles.menuItem}
                        onPress={() => handlePressMenuItem(item.navigateScreen)}>
                        {item.icon}
                        <Text
                            style={[
                                styles.menuItemTitle,
                                item.active && { color: colors.primary.ui_120 }
                            ]}>
                            {item.title}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

export default FooterMenu;