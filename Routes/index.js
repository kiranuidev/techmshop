import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Home from "../pages/Home";
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import Invoice from '../pages/Invoice';
  
const Route = createStackNavigator(
  {
    Home:Home,
    Products:Products,
    Cart:Cart,
    Invoice:Invoice
},
  {
    initialRouteName: "Home"
  }
);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;
