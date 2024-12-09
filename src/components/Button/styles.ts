import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: colors.primary.ui_100,
        borderRadius: 32,
    },

    buttonText: {
        color: colors.gray.ui_00,
        fontWeight: 600,
        ...typography.bodyS.semibold,
        fontFamily: 'Poppins-Semibold'
    },
});
