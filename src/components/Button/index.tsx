import { Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string,
    width?: ViewStyle['width'],
}

const Button: React.FC<Props> = ({ title, width = 'auto' }) => {
    return (
        <Pressable style={[styles.button, { width }]}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default Button;