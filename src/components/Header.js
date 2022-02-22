import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isLogin && (
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
