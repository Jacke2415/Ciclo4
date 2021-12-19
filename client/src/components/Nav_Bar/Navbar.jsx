import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../public/css/navbar.css";

const DNavbar = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    logout(dispatch);
  };

  const menuitems = props.items;
  console.log(menuitems);
  const items = () =>
    menuitems.map((item) => (
      <li>
        <Link to={item.url}>
            {item.svg}
          <span className="nav-text">{item.name}</span>
        </Link>
      </li>
    ));
  return (
    <nav className="main-menu">
      <ul>{items()}</ul>
      <ul className="logout">
        <li>
          <Link to="/signin" onClick={logout}>

            <i className="fa fa-power-off fa-2x"></i>
            <span className="nav-text">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}; 

export default DNavbar;
