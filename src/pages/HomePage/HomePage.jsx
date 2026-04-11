import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import { Slider } from "antd";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";
import slider5 from "../../assets/images/slider5.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
  const arr = [
    "TV",
    "Điện thoại",
    "Laptop",
    "Máy tính bảng",
    "Âm thanh",
    "Phụ kiện",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#e3e3e3",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent
          arrImages={[slider1, slider2, slider3, slider4, slider5]}
        />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
