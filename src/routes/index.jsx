import React from "react";
// import { Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import PageLoader from "../components/PageLoader/PageLoader";

const loading = () => <PageLoader display />;

const indexRoutes = [
  {
    path: `/`,
    exact: true,
    name: "LandingPage",
    Component: Loadable({
      loader: () =>
        import(
          "../views/LandingPage/LandingPage" /* webpackChunkName: "layout" */
        ),
      loading,
    }),
  },
];

export default indexRoutes;
