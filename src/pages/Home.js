import React, { useContext, useState } from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Region from "../components/Region";
import Filter from "../components/SortBy";
import AppContext from "../context";

const { Content } = Layout;

const Home = () => {
  const [regions, setRegions] = useState(useContext(AppContext));
  return (
    <Content style={{ padding: "0 50px" }} className="list-region">
      <Filter regions={regions} setRegions={setRegions} />
      <Row>
        {regions.map((region) => (
          <Col lg={6} key={region.order}>
            <Link to={`/region/${region.order}`}>
              <Region data={region} />
            </Link>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Home;
