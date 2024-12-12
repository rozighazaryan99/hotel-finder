import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryKeys } from "../../utils/queryKeys";
import { getHotel } from "../../api/hotels";
import { Hotel, UseHotelOptions } from "../../../types";

export const useHotel = ({ id, ...options }: UseHotelOptions): UseQueryResult<Hotel, Error> => {
    return useQuery<Hotel, Error>({
        queryKey: queryKeys.hotels.byId(id),
        queryFn: () => getHotel(id),
        retry: 1,
        ...options,
    });
};