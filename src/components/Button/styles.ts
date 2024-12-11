import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: colors.primary.ui_100,
        borderRadius: 32,
        alignItems: 'center',
    },

    buttonText: {
        color: colors.gray.ui_00,
        fontFamily: 'Poppins-SemiBold',
    },
});
