import React from "react";
import { Link } from "react-router-dom";
function Navigation(props) {
  return (
    <div classname="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
