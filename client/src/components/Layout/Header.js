import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useAuthentication from "../../lib/hooks/useAuthentication";
import NavIdentification from '../NavIdentification/NavIdentification'

const UserLogin = ({ user }) => {
  const dispatch = useDispatch();
  const { handleUserLogout } = useAuthentication(dispatch);

  const logout = () => {
    handleUserLogout();
    // setTimeout(() => window.location.reload(), 1000);
  };
  return (
    <>
      <div>
        <span className="nav-divnk">
          {!!user ? (
            <>
              <button className="btn btn-danger btn-sm" onClick={logout}>
                logout
              </button>{" "}
              <span>
                {" "}
                <b>Hi, {user?.first}</b>
              </span>
            </>
          ) : (
            <span>
              <Link to={"/login"}>login</Link> or{" "}
              <Link to={"/register"}>register</Link>
            </span>
          )}
        </span>
      </div>
    </>
  );
};

const Header = () => {
  const { items } = useSelector((state) => ({ ...state.cart }));
  const { user } = useSelector((state) => state.user);
  const quantity = items.length > 0 ? items.length : "";
  return (
    <nav className="navbar-light bg-light border">
      
      <div className="container-fluid">

        <div className="row justify-content-md-center">

            <div className="col-2">
              <UserLogin user={user} />
            </div>

            <div className="col-8 ">
                <NavIdentification />
            </div>

            <div className="col-2">

              <div className="container-fluid">

                <div className="row justify-content-end">

                  <div className="col-6">
                    <Link to="/MyOrder" className="nav-link" disabled={true}>
                      My Orders
                    </Link>
                  </div>

                  {/* <div className="col border">
                    <Link to="#" className="nav-link">
                      <i className="fas fa-bell"></i>
                    </Link>
                  </div> */}

                  <div className="col-2">
                    <Link to={"/cart"} className="nav-link">
                      <i className="fas fa-shopping-cart"></i>
                    </Link>
                  </div>

                  <div >
                    <span className="badge badge-primary">{quantity}</span>
                  </div>

                </div>
              </div>
            </div>

        </div>
        
      </div>

    </nav>
  );
};
export default Header;
