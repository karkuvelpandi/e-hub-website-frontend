import { cloneElement } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./common/HomePage";
import ContactPage from "./common/ContactPage";
import LogIn from "../components/User/LogIn/LogIn";
import Products from "../components/Products";
import RegForm from "../components/User/RegForm/RegForm";
import EditForm from "../components/User/EditForm/EditForm";
import UserAdmin from "../components/User/UserAdmin/UserAdmin";
import ProductAdmin from "../components/Products/components/ProductAdmin";
import UpdateProduct from "../components/Products/components/UpdateProduct";
import CreateProduct from "../components/Products/components/CreateProduct";
import { ProductPage } from "../components/Products/ProductPage";
/**
 * Component to separate all routes form App.js to achieve cleaner code and easy to modify in future.
 */
export const ApplicationRoutes = () => {
  const commonPages = [
    <HomePage path="/" />,
    <Products path="/products/*" />,
    <ProductPage path="/:product_name/:product_id" />,
    <CreateProduct path="/createProduct" />,
    <ProductAdmin path="/productAdmin" />,
    <UpdateProduct path="/updateProduct/:id" />,
    <LogIn path="/userLogin" />,
    <RegForm path="/regForm" />,
    <UserAdmin path="/userAdmin" />,
    <EditForm path="/editForm/:id" />,
    <ContactPage path="/contact" />,
  ];

  return (
    <>
      <Routes>
        {[...commonPages]
          .filter((item) => !!item)
          .map((page, index) => {
            const { path, replace, ...restOfProps } = page.props;
            return (
              <Route
                key={index}
                path={path || replace}
                element={cloneElement(page, {
                  ...restOfProps,
                  key: index,
                })}
              />
            );
          })}
      </Routes>
    </>
  );
};
