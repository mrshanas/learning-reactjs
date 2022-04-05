import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { showProducts } from "./redux/actions/products";

function App() {
  const dispatch = useDispatch();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  const store = useSelector((store) => console.log(store));

  const check = () => {
    dispatch(showProducts());
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth="0"
      >
        <Menu>
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">Nav 2</Menu.Item>
          <Menu.Item key="3">Nav 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <button onClick={toggle}>{collapsed ? "Open" : "Close"}</button>
        </Header>
        <Content>
          Content
          <button onClick={check}>Store</button>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
