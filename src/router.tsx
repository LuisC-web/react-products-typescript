import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./Views/Products";
import NewProducts from "./Views/NewProductst";
import { action as newProductAction } from "./components/FormComponent";
import { loader as ProductsLoaders } from "./Views/Products";
import EditProduct, { loader as EditProductLoader } from "./Views/EditProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Products></Products>, loader: ProductsLoaders },
      {
        element: <NewProducts></NewProducts>,
        path: "productos/nuevo",
        action: newProductAction,
      },
      {
        path: "productos/:id/editar", //ROA pattern
        element: <EditProduct></EditProduct>,
        loader: EditProductLoader,
        action: newProductAction,
      },
    ],
  },
]);
