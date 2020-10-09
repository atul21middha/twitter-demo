import React from 'react';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";

const App = ( ) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
