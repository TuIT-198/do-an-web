import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#028a2f",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
        }}
      />
      <Button
        size={size}
        bordered={bordered}
        icon={<SearchOutlined color={colorButton} />}
        style={{
          borderRadius: "0px",
          backgroundColor: backgroundColorButton,
          border: "none",
        }}
      >
        <span style={{ color: colorButton }}> {textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
