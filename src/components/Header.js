import React from "react";
//import ReactDom from "react-router-dom";


const Header = () => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <div className="dropdown-item" to="/profile">
                        Profile
                      </div>

                      <div className="dropdown-item" to="#">
                        Logout
                      </div>
                    </div>
                  </div>
                  <div to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <div className="navbar-brand" to="/">
                  <h1>Adin</h1>
                </div>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, Admin 
                  </button>
                  <div className="dropdown-menu">
                    <div className="dropdown-item" to="/profile">
                      Profile
                    </div>

                    <div className="dropdown-item" to="#">
                      Logout
                    </div>
                  </div>
                </div>

                <div to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;