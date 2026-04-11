import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperImageStyle,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 250 }}
      bodyStyle={{ padding: "15px" }}
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/736x/26/00/16/26001687a2291e1ca2d8582ee49d1874.jpg"
        />
      }
    >
      <WrapperImageStyle src={logo} alt="Logo" />
      <StyleNameProduct>Ai phun 17 promax</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "5px" }}>
          <span> 4.90 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        10.000.000 đ <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
