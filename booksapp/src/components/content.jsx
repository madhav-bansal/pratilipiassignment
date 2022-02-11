import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import TopContent from "./topContent";

class Content extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <TopContent bookdetails={this.bookdetails} />
        <Footer />
      </div>
    );
  }
}

export default Content;
