import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Страница которую вы посетили не существует, либо была удалена."
    extra={
      <Button type="primary">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    }
  />
);

export default Error404;
