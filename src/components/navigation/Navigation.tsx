import React from "react";
import { Container } from "react-bootstrap";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="left-nav-items nav-item">
        <ul>
          <li>
            <a href="#about"> &lt; about /&gt;</a>
          </li>
          <li>
            <a href="#skills"> &lt; skills /&gt;</a>
          </li>
        </ul>
      </div>
      <div className="brand-name nav-item">
        <h3>Meetbeddy</h3>
      </div>
      <div className="right-nav-items nav-item">
        <ul>
          <li>
            <a href="#about"> &lt; works /&gt;</a>
          </li>
          <li>
            <a href="#skills"> &lt; contact /&gt;</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
