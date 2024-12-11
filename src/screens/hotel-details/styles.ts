import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

export const styles = StyleSheet.create({
    hotelDetails: {
        flex: 1,
        backgroundColor: colors.gray.ui_00,
    },

    hotelImage: {
        width: '100%',
        height: '50%',
        objectFit: 'cover',
    },

    hotelInfo: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        height: '100%',
    },

    hotelInfoTitle: {
        ...typography.title,
        fontWeight: 600,
        fontFamily: 'Poppins-SemiBold',
        color: colors.gray.ui_100,
    },

    hotelInfoSubtitle: {
        ...typography.subtitle,
        fontWeight: 600,
        fontFamily: 'Poppins-SemiBold',
        color: colors.gray.ui_100,
        marginTop: 32,
        marginBottom: 16,
    },

    hotelInfoDescription: {
        ...typography.bodyM.regular,
        fontFamily: 'Poppins-Regular',
        paddingBottom: 92,
    },

    hotelDetailsFooter: {
        padding: 16,
        paddingBottom: 32,
        position: 'absolute',
        width: '100%',
        backgroundColor: colors.gray.ui_00,
        bottom: 0,
        shadowColor: '#1F2027',
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4,
    },
});
