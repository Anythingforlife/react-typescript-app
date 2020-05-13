import React from 'react';
import {useDispatch} from 'react-redux';
import authentication from '../../actions/authentication';

export default function Header() {
  const dispatch = useDispatch();

  function logout(e: any) {
    e.preventDefault();
    dispatch(authentication.logoutSession());
  }

  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <span className="nav-link">Home</span>
          </li>
        </ul>
      </div>
      <a href="login" onClick={logout}>
        <span className="navbar-text mr-0">Logout</span>
      </a>
    </nav>
  );
}
