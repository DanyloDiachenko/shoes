import { fetchApi } from "@/helpers/fetchApi";
import { Color } from "@/interfaces/entities/color.interface";

export const getColors = async (): Promise<Color[]> => {
    return await fetchApi({
        endpoint: "/colors",
        method: "GET",
    });
};
