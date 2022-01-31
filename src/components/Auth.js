import React from "react";

import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import styles from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
