import { Linking, Pressable, Text, TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";

interface Props {
    title: string;
    url?: string;
    width?: ViewStyle['width'];
    typography?: TextStyle;
}

const Button: React.FC<Props> = ({ title, url, width = 'auto', typography }) => {
    // functions
    const handlePress = () => {
        if (!url) return null;

        Linking.openURL(url)
            .catch(err => console.error('An error occurred', err));
    }

    return (
        <Pressable onPress={handlePress} style={[styles.button, { width }]}>
            <Text style={[styles.buttonText, typography]}>{title}</Text>
        </Pressable>
    )
}

export default Button;