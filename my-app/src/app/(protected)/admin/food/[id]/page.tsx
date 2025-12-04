import axios from "axios";
import EditFoodForm from "../../../../../components/admin/food_edit_page/EditFoodForm";
import { cookies } from "next/headers";
import { FoodType } from "@/types/foodType";

type Params = { id: number };

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  console.log("Id: " + id);

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  // server-side fetch of the food item
  const { data } = await axios.get(
    `http://localhost:8000/Thoai-pro-spring/fooditem/${id}`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );
  const { data: foodT } = await axios.get(
    `http://localhost:8000/Thoai-pro-spring/foodtype`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );
  console.log("Data: " + JSON.stringify(data));

  if (!data) {
    // simple error handling - customize as needed
    return (
      <div className="container py-4">
        <h1>Edit Food</h1>
        <div className="alert alert-danger">Failed to load item (status: )</div>
      </div>
    );
  }
  const food = await data;
  const foodType = foodT as FoodType[];

  return (
    <div className="container py-4">
      <h1 className="mb-3">Edit Food</h1>
      {/* pass server-fetched data to the client form */}
      {/* @ts-ignore */}
      <EditFoodForm initialData={food} foodType={foodType} />
    </div>
  );
}
