import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowInHeader: true,
  },
  {
    path: "/orders",
    page: OrderPage,
    isShowInHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowInHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
