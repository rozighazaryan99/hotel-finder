import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    hotelsListContainer: {
        paddingTop: Platform.OS === 'ios' ? 64 : 0,
        paddingHorizontal: 16,
        paddingBottom: 108,
    },
});
