import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UseQueryOptions } from "@tanstack/react-query";
import { TextStyle } from "react-native";

export type RootStackParamList = {
    HotelsList: undefined;
    HotelDetails: { id: number };
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type HotelDetailsScreenRoute = RouteProp<RootStackParamList, 'HotelDetails'>;

export type FooterMenuItem = {
    id: number,
    title: string,
    icon: React.ReactNode,
    active?: boolean,
    navigateScreen: 'HotelsList',
}

export type Colors = {
    primary: {
        ui_05: string;
        ui_10: string;
        ui_80: string;
        ui_100: string;
        ui_120: string;
    };
    secondary: {
        ui_05: string;
        ui_10: string;
        ui_20: string;
        ui_100: string;
        ui_140: string;
    };
    gray: {
        ui_00: string;
        ui_05: string;
        ui_10: string;
        ui_20: string;
        ui_60: string;
        ui_70: string;
        ui_100: string;
    };
};

export type Typography = {
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

export type Hotel = {
    distance: string,
    id: number,
    image_src: string,
    name: string,
    price_category: number,
    rating: number,
    overview: string,
}

export type HotelsResponse = Hotel[];

export type UseHotelsOptions = Omit<UseQueryOptions<HotelsResponse, Error, HotelsResponse>, 'queryKey' | 'queryFn'>;

export type UseHotelOptions = Omit<UseQueryOptions<Hotel, Error, Hotel>, 'queryKey' | 'queryFn'> & {
    id: number;
};
