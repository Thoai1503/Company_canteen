import { getAllFoodType } from "@/service/foodType";
import { getAllOrder } from "@/service/order";
import { queryOptions } from "@tanstack/react-query";

export const orderQuery = {
  list: queryOptions({
    queryKey: ["order"],
    queryFn: () => getAllOrder(),
  }),
};
