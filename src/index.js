import React, { useState } from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./Books/BooksPresenter.js";

import "./styles.css";

function App() {
  const booksPresenter = new BooksPresenter();
  const [vm, copyViewModelToStateViewModel] = useState([]);

  React.useEffect(() => {
    async function load() {
      const generateViewModel = (generatedViewModel) => {
        copyViewModelToStateViewModel(generatedViewModel);
      };
      await booksPresenter.load(generateViewModel);
    }
    load();
  }, []);

  return (
    <div>
      {vm.map((bookVm, i) => {
        return <div key={i}>{bookVm.name}</div>;
      })}
      <button
        onClick={() => {
          booksPresenter.addBook({
            name: "BFTDD",
            author: "Pete Heard",
          });
        }}
      >
        add book
      </button>
      <button
        onClick={() => {
          booksPresenter.reset();
        }}
      >
        reset
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
