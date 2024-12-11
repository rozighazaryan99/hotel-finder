import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

export const styles = StyleSheet.create({
    footerContainer: {
        width: "100%",
        height: 88,
        paddingVertical: 10,
        paddingHorizontal: 22,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: colors.gray.ui_10,
    },

    menuItem: {
        alignItems: 'center'
    },

    menuItemTitle: {
        ...typography.tabBar,
        fontWeight: 500,
        color: colors.gray.ui_60,
        marginTop: 4,
    }
});
