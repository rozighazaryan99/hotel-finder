import { TextStyle } from 'react-native';

const typography: Typography = {
    title: {
        fontSize: 22,
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 18,
        lineHeight: 28,
    },
    bodyM: {
        semibold: {
            fontSize: 14,
            lineHeight: 22,
            fontWeight: '600',
        },
        medium: {
            fontSize: 14,
            lineHeight: 22,
            fontWeight: '500',
        },
        regular: {
            fontSize: 14,
            lineHeight: 22,
            fontWeight: '400',
        },
    },
    bodyS: {
        semibold: {
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '600',
        },
        medium: {
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '500',
        },
        regular: {
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '400',
        },
    },
    tabBar: {
        fontSize: 11,
        lineHeight: 16,
    },
};

type Typography = {
    title: TextStyle;
    subtitle: TextStyle;
    bodyM: {
        semibold: TextStyle;
        medium: TextStyle;
        regular: TextStyle;
    };
    bodyS: {
        semibold: TextStyle;
        medium: TextStyle;
        regular: TextStyle;
    };
    tabBar: TextStyle;
}

export default typography;