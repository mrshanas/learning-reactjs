import React, { useEffect } from "react";
import { useSignOut } from "react-auth-kit";
import { Tabs } from "antd";
import Products from "./products";
import Categories from "./categories";
import Sales from "./sales";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, showProducts } from "../../redux/actions/products";
import { showCategories, addCategory } from "../../redux/actions/categories";
import { showSales, sellProduct } from "../../redux/actions/sales";

const Shop: React.FC = () => {
  const signout = useSignOut();
  const logout = () => signout();
  const dispatch = useDispatch();
  //@ts-ignore
  const store = useSelector((store) => store);
  const { TabPane } = Tabs;

  console.log(store);

  useEffect(() => {
    dispatch(showProducts());
    dispatch(showCategories());
    dispatch(showSales());
  }, []);

  const addCat = () => dispatch(addCategory({ title: "Milk" }));

  const addPro = () =>
    dispatch(
      addProduct({ name: "ASAS", price: "800", quantity: 15, category: 15 })
    );

  const sellPro = () =>
    dispatch(
      sellProduct({ product: 56, amount_paid: "1000", quantity_bought: 1 })
    );

  return (
    <div>
      Welcome to your shop <button onClick={logout}>Sign Out</button>
      <button onClick={addCat}>Add category</button>
      <button onClick={addPro}>Add Product</button>
      <button onClick={sellPro}>Sell product</button>
      <Tabs tabPosition="left">
        <TabPane tab="Dashboard" key="1">
          Dashboard
        </TabPane>
        <TabPane tab="Products" key="2">
          <Products />
          <Tabs>
            <TabPane tab="sell" key="5">
              Sell product
            </TabPane>
            <TabPane tab="products" key="6">
              View Product
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Categories" key="3">
          <Categories />
        </TabPane>
        <TabPane tab="Sales" key="4">
          <Sales />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Shop;
