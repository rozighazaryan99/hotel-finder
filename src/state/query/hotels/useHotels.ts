import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { queryKeys } from "../../utils/queryKeys";
import { getHotels } from "../../api/hotels";
import { HotelsResponse, UseHotelsOptions } from "../../../types";

export const useHotels = (options?: UseHotelsOptions): UseQueryResult<HotelsResponse, Error> => {
    return useQuery<HotelsResponse, Error>({
        queryKey: queryKeys.hotels.all,
        queryFn: getHotels,
        retry: 1,
        ...options,
    });
};