import { orderQuery } from "@/query/order";
import { useQuery } from "@tanstack/react-query";

export const useOrderPage = () => {
  const { data: orderList } = useQuery(orderQuery.list);
  return { orderList };
};
