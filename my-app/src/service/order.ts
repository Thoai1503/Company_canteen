import http from "@/lib/http";
import { Order } from "@/types/order";

export const getAllOrder = async (): Promise<Order[]> => {
  return await http
    .get("/order")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
