import "./assets/css/bootstrap.min.css";
import "./assets/icons/bootstrap/bootstrap-icons.css";
import "./assets/css/style.css";
import React, { Component } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  return (
    <React.Fragment>
      {/* Header */}
      <Header />
      {/* Main Component*/}
      <section className="main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                {/* Menu */}
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default App;
