import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container p-3 p-sm-1 mt-4 ">
      <div className="row justify-content-center ">
        <div className="col-xl-7 col-lg-7 col-md-10 ">
          <div className="card bg-secondary ">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
