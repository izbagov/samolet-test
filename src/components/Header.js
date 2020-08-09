import React from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
import Search from "./Search";

const { Header: HeaderAnt } = Layout;
const { Title, Text } = Typography;

const Header = () => {
  return (
    <HeaderAnt>
      <Link className="header-logo" to="/">
        <BookOutlined />
        <div className="header-logo__info">
          <Title level={4}>Library house</Title>
          <Text>Информация о библиотеках в твоем регионе</Text>
        </div>
      </Link>
      <Search />
    </HeaderAnt>
  );
};

export default Header;
