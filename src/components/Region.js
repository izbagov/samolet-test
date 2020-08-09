import React from "react";
import { Card } from "antd";
import { BankOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Region = ({ data }) => {
  const { libraries, territory } = data;
  return (
    <Card>
      <Meta
        avatar={<BankOutlined style={{ fontSize: 24 }} />}
        title={territory}
        description={
          <>
            Количество библиотек:{" "}
            <strong style={{ color: "#222" }}>{libraries}</strong>
          </>
        }
      />
    </Card>
  );
};

export default Region;
