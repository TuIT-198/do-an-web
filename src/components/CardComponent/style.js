import { Card } from "antd";
import styled from "styled-components";
export const WrapperCardStyle = styled(Card)`
  width: 300px;
  & img {
    width: 300px;
    height: 300px;
  }
  position: relative;
`;
export const WrapperImageStyle = styled.img`
  top: -1px;
  left: -1px;
  border-top-left-radius: 8px;
  position: absolute;
  height: 14px !important;
  width: 68px !important;
`;
export const StyleNameProduct = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  line-height: 16px;
`;
export const WrapperReportText = styled.div`
  font-size: 15px;
  color: #585858;
  display: flex;
  align-items: center;
  margin: 6px 0 6px;
`;
export const WrapperPriceText = styled.div`
  font-size: 20px;
  color: #ff0000;
  font-weight: 500;
  margin: 10px 0;
`;
export const WrapperDiscountText = styled.span`
  font-size: 15px;
  color: #ff0000;
  font-weight: 500;
`;
