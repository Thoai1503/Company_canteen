import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

export default function Food() {
  return (
    <div>
      <h2>Quản lý món ăn</h2>

      <div className="mt-5">
        <button className="btn btn-success justify-self-end">
          Thêm món mới
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên món ăn </th>
              <th>Loại món</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cơm cá chiên</td>
              <td>Cơm</td>
              <td>300.000 VNĐ</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Canh khổ qua</td>
              <td>Canh</td>
              <td>200.000 VNĐ</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Coca-cola</td>
              <td>Giải khát</td>
              <td>200.000 VNĐ</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rau câu</td>
              <td>Món tráng miệng</td>
              <td>200.000 VNĐ</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>Smith</td>
              <td>200.000 VNĐ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
