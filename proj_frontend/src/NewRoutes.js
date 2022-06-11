import React from "react";
import { BrowserRouter, Route, Routes,match } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories  from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";


const NewRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/Cart" exact element={<Cart />}></Route>
        {/* <PrivateRoutes path="/user/dashboard" component={UserDashBoard}></PrivateRoutes>
        <AdminRoutes path="/admin/dashboard" component={AdminDashBoard}></AdminRoutes>
        <AdminRoutes path="/admin/create/category" component={AddCategory}></AdminRoutes>  */}
        <Route
          path="/user/dashboard"
          element={
            <PrivateRoutes redirectTo="/signin">
              <UserDashBoard />
            </PrivateRoutes>
          }
        />
         <Route
          path="/admin/dashboard"
          element={
            <AdminRoutes redirectTo="/signin">
              <AdminDashBoard />
            </AdminRoutes>
          }
        />
         <Route
          path="/admin/create/category"
          element={
            <AdminRoutes redirectTo="/signin">
              <AddCategory />
            </AdminRoutes>
          }
        />
         <Route
          path="/admin/categories"
          element={
            <AdminRoutes redirectTo="/signin">
              <ManageCategories/>
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/create/product"
          element={
            <AdminRoutes redirectTo="/signin">
              <AddProduct/>
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/product"
          element={
            <AdminRoutes redirectTo="/signin">
              <ManageProducts/>
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/product/update/:productId"
          element={
            <AdminRoutes redirectTo="/signin">
              <UpdateProduct/>
            </AdminRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NewRoutes;
