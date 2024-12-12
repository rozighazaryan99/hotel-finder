import axios from "axios";
import { API_URL } from "../utils/constants";
import { Hotel, HotelsResponse } from "../../types";

export const getHotels = async (): Promise<HotelsResponse> => {
    try {
        const { data } = await axios.get<HotelsResponse>(`${API_URL}/hotels`);

        if (!Array.isArray(data)) {
            throw new Error("Invalid data format");
        }

        console.log("Hotels data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching hotels: ", error);
        throw error;
    }
};

export const getHotel = async (id: number): Promise<Hotel> => {
    try {
        const { data } = await axios.get<Hotel>(`${API_URL}/hotels/${id}`);

        console.log("Hotel data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching hotel: ", error);
        throw error;
    }
};