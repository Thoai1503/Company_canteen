import FoodList from "@/components/admin/food_page/FoodList";
import { FoodItem } from "@/types/foodItem";
import axios from "axios";
import { cookies } from "next/headers";
// app/food/page.tsx

export default async function Food() {
  const cookieStore = await cookies(); // <--- Thêm await
  const token = cookieStore.get("token")?.value;

  const res = await axios.get(
    "http://localhost:8000/Thoai-pro-spring/fooditem",
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );

  const post = res.data as FoodItem[];
  console.log("Data: " + JSON.stringify(post));

  return (
    <div>
      <h2>Quản lý món ăn</h2>

      <FoodList list={post} />
    </div>
  );
}
