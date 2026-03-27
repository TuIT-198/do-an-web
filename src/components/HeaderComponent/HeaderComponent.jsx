import React from "react";
import { Col, Flex } from "antd";
import { WrapperTextHeader } from "./style";
import { WrapperHeader } from "./style";
import Search from "antd/es/transfer/search";
import { UserOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { WrapperHeaderAccount } from "./style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { WrapperTextHeaderSmall } from "./style";
import { Color } from "antd/es/color-picker";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={"15px"}>
        <Col span={6}>
          {" "}
          <WrapperTextHeader> TuIT </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
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
