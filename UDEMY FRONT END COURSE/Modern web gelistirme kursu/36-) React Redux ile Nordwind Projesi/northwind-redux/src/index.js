import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // reactstrap in kullanilmasi icin gerekli code. [ https://reactstrap.github.io ] adresinden ulasabilirsiniz
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import "alertifyjs/build/css/alertify.min.css"; // alertify ekleme
import { BrowserRouter } from "react-router-dom"; // react-router-dom baglama

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
