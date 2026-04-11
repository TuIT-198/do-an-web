import React from "react";
import { Button, Col, Flex } from "antd";
import { WrapperTextHeader } from "./style";
import { WrapperHeader } from "./style";
import Search from "antd/es/transfer/search";
import { UserOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { WrapperHeaderAccount } from "./style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { WrapperTextHeaderSmall } from "./style";
import { Color } from "antd/es/color-picker";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={"15px"}>
        <Col span={6}>
          {" "}
          <WrapperTextHeader> TuIT </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            bordered={false}
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
            // onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>
                Đăng nhập/ Đăng ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: `#fff` }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
