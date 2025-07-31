import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";

import "./style/style.scss";

// import useMarvelService from "./services/MarvelService";

// const TestCall = () => {
//   const marvelService = useMarvelService();

//   marvelService.getAllComics().then((res) => console.log(res));
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <TestCall/>
  // <React.StrictMode>
  // </React.StrictMode>
);
