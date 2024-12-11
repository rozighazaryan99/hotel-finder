import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export const styles = StyleSheet.create({
    back: {
        width: 40,
        height: 40,
        backgroundColor: colors.gray.ui_00,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 57,
        left: 8,
        zIndex: 1,
    }
});
