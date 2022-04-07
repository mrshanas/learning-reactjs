import React from "react";
import MainRouter from "./pages";
import { AuthProvider } from "react-auth-kit";
//import { Layout, Menu } from "antd";
//import { useSelector, useDispatch } from "react-redux";
//import { showProducts } from "./redux/actions/products";

const App: React.FC = () => {
  //const dispatch = useDispatch();
  // const { Header, Sider, Content } = Layout;
  // const [collapsed, setCollapsed] = useState(false);

  // const toggle = () => setCollapsed(!collapsed);

  //const store = useSelector((store) => console.log(store));

  return (
    <AuthProvider authType={"localstorage"} authName="token">
      <MainRouter />
    </AuthProvider>
  );
};

export default App;
