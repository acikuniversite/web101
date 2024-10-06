import { lazy } from "react";

export const Card = lazy(() => import("./Card/Card"));
export const Pagination = lazy(() => import("./Pagination"));
export const Filter = lazy(() => import("./Filters/Filter"));
export const SortFilter = lazy(() => import("./Filters/SortFilter"));
export const Checkout = lazy(() => import("./Checkout/Checkout"));

export const Loading = lazy(() => import("./Loading/Loading"));
export const NotFound = lazy(() => import("./NotFound"));
export const Navbar = lazy(() => import("./Navbar/Navbar"));

