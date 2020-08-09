import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({ regions, setRegions }) => {
  const handleChangeSortBy = (type) => {
    const sort = regions.sort((a, b) => {
      if (type === "order") {
        return a[type] - b[type];
      }

      return b[type] - a[type];
    });

    setRegions(() => [...sort]);
  };
  return (
    <div className="sort-by-library" style={{ margin: "20px 0" }}>
      <span style={{ marginRight: 12 }}>Сортировать по:</span>
      <Select
        style={{ width: 220 }}
        onChange={handleChangeSortBy}
        placeholder="Выберите тип сортировки"
      >
        <Option key="default" value="order">
          По умолчанию
        </Option>
        <Option key="visits" value="visits">
          Количество посещений
        </Option>
        <Option key="libraries" value="libraries">
          Количество библиотек
        </Option>
        <Option key="computers" value="computers">
          Количество компьютеров
        </Option>
        <Option key="employees" value="employees">
          Количество работников
        </Option>
      </Select>
    </div>
  );
};

export default Filter;
