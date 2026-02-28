import React from "react";

const Nav = ({ setPage }) => {
  return (
    <div className="navcontainer">
      <nav className="nav">
        <div className="nav-upper-options">

          {/* Dashboard */}
          <div
            className="nav-option option1"
            onClick={() => setPage("dashboard")}
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
              className="nav-img"
              alt="dashboard"
            />
            <h3>Dashboard</h3>
          </div>

          {/* Articles */}
          <div
            className="nav-option"
            onClick={() => setPage("articles")}
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
              className="nav-img"
              alt="articles"
            />
            <h3>Articles</h3>
          </div>

          {/* Report */}
          <div
            className="nav-option"
            onClick={() => setPage("report")}
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
              className="nav-img"
              alt="report"
            />
            <h3>Report</h3>
          </div>

          {/* Institution */}
          <div
            className="nav-option"
            onClick={() => setPage("institution")}
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
              className="nav-img"
              alt="institution"
            />
            <h3>Institution</h3>
          </div>

          {/* Profile */}
          <div
            className="nav-option"
            onClick={() => setPage("profile")}
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
              className="nav-img"
              alt="profile"
            />
            <h3>Profile</h3>
          </div>

          {/* Logout */}
          <div className="nav-option logout">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
              className="nav-img"
              alt="logout"
            />
            <h3>Logout</h3>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Nav;