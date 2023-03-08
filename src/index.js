
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,  Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";

import { Provider } from 'react-redux';
import { store } from './Redux/Store';


import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import Cookies from "js-cookie";
import Editpage from "views/Pages/Edit-page";
import { getToken } from "utils/utils";
const token = getToken()
const user = true







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>

    <Provider store={store} >
      




        {token ? <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> : <Route path="/auth" render={(props) => <AuthLayout {...props} />} />}
        {token ? <Navigate from="/" to="/admin/dashboard" /> : <Navigate from="/" to="/auth/login-page" />}

     

     </Provider>
  </BrowserRouter>,
 {/* </React.StrictMode>  */}
);







