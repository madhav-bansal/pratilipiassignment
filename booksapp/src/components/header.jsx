import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              DASHBOARD
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
