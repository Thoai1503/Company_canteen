"use client";
import LoadingSkeleton from "@/components/common/loading/LoadingSkeleton";
import { FoodItem } from "@/types/foodItem";
import React, { Suspense, useEffect, useState } from "react";
import AddFoodModal from "./AddFoodModal";
import { useFoodPage } from "@/hook/admin/useFoodPage";
import Image from "next/image";
import FoodItems from "./FoodItem";

interface FoodListProps {
  list: FoodItem[];
}

const FoodList = ({ list }: FoodListProps) => {
  const [foodList, setFoodList] = useState<FoodItem[]>(list);
  const { handleSubmit, handleChange, foodInfo, list_data, handleFileChange } =
    useFoodPage(setFoodList);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Sync with prop changes
  useEffect(() => {
    setFoodList(list);
  }, [list]);

  return (
    <div className="mt-5">
      <button
        className="btn btn-success mb-3"
        onClick={handleShow}
        aria-label="Thêm món ăn mới"
      >
        Thêm món mới
      </button>

      <div
        className="table-responsive"
        style={{ maxHeight: "75vh", overflowY: "auto" }}
      >
        <table className="table table-hover mt-3">
          <thead className="table-light sticky-top">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên món ăn</th>
              <th scope="col">Loại món</th>
              <th scope="col">Giá</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {foodList.length > 0 ? (
              foodList.map((item, index) => (
                <FoodItems key={item.id} item={item} index={index} />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-muted">
                  Chưa có món ăn nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AddFoodModal
        show={show}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        foodInfo={foodInfo}
        foodTypeList={list_data || []}
        setFoodList={setFoodList}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default FoodList;
