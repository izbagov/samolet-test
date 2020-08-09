import React, { useContext } from "react";
import { Layout, Descriptions, Result, Button } from "antd";
import { useRouteMatch, Link } from "react-router-dom";
import AppContext from "../context";

const { Content } = Layout;

const Info = () => {
  const regions = useContext(AppContext);
  const {
    params: { id },
  } = useRouteMatch();

  const region = regions.find((region) => region.order === Number(id));

  const {
    fullname,
    address,
    territory,
    libraries,
    computers,
    users,
    visits,
    subscribers,
    employees,
  } = region || {};
  return (
    <Content style={{ padding: 50 }}>
      {region ? (
        <Descriptions title="Информация о библиотеке">
          <Descriptions.Item label="Название">{fullname}</Descriptions.Item>
          <Descriptions.Item label="Адрес">{address}</Descriptions.Item>
          <Descriptions.Item label="Территория">{territory}</Descriptions.Item>
          <Descriptions.Item label="Количество библиотек">
            {libraries}
          </Descriptions.Item>
          <Descriptions.Item label="Компьютеров">{computers}</Descriptions.Item>
          <Descriptions.Item label="Пользователей">
            {users.toFixed(0)}
          </Descriptions.Item>
          <Descriptions.Item label="Посетителей">
            {visits.toFixed(0)}
          </Descriptions.Item>
          <Descriptions.Item label="Подписчиков">
            {subscribers}
          </Descriptions.Item>
          <Descriptions.Item label="Работников">{employees}</Descriptions.Item>
        </Descriptions>
      ) : (
        <Result
          status="warning"
          title="Данного региона нет в базе :("
          extra={
            <Button type="primary" key="console">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          }
        />
      )}
    </Content>
  );
};

export default Info;
