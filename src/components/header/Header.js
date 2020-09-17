import React, { Component } from "react";
import Sticky from "react-sticky-el";

import HeaderLink from "./HeaderLink";

import "../../assets/css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Sticky>
          <HeaderLink />
        </Sticky>
      </div>
    );
  }
}
