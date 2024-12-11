import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

export const styles = StyleSheet.create({
    hotelBlock: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.gray.ui_10,
    },

    hotelBlockImage: {
        width: '100%',
        height: 245,
    },

    hotelBlockInfo: {
        padding: 16,
    },

    distance: {
        flexDirection: 'row',
    },

    distanceText: {
        ...typography.bodyS.medium,
        fontFamily: 'Poppins-Medium',
        color: colors.gray.ui_100,
        marginLeft: 4,
    },

    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary.ui_05,
        padding: 2,
    },

    ratingNumber: {
        ...typography.bodyS.medium,
        color: colors.primary.ui_120,
        marginLeft: 2,
        fontFamily: 'Poppins-Medium'
    },

    hotelBlockInfoTitle: {
        ...typography.bodyM.semibold,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 8,
        marginBottom: 16,
    },

    dollarBlock: {
        backgroundColor: colors.secondary.ui_10,
        borderRadius: 8,
        width: 48,
        height: 18,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 8,
        marginBottom: 10,
    },
});
