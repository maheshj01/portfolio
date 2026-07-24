import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./tailwind.css";
import { AppThemeProvider } from "./contexts/AppThemeProvider";
import { ApolloProvider } from '@apollo/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { client } from "./contexts/ApolloClient";
import { MotionConfig } from "framer-motion";
import ErrorRoute from "./routes/error";
import PrivacyPolicy from "./routes/vocabhub/privacy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


const Layout = () => {
  const date = new Date();
  // const isLastWeekOfYear = date.getMonth() === 11 && date.getDate() >= 24;
  return (
    <div >
      <Outlet />
    </div>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: < ErrorRoute />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/vocabhub/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppThemeProvider>
        <MotionConfig reducedMotion="user">
          <RouterProvider router={router} />
        </MotionConfig>
      </AppThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
