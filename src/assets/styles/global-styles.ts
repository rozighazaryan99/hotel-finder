import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    fullBetween: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    row: {
        flexDirection: "row",
    },

    column: {
        flexDirection: "column",
    },

    jc_start: {
        justifyContent: "flex-start",
    },

    jc_center: {
        justifyContent: "center",
    },

    jc_between: {
        justifyContent: "space-between",
    },

    jc_end: {
        justifyContent: "flex-end",
    },

    ai_center: {
        alignItems: "center",
    },
});

export default globalStyles;
