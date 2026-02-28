import React from "react";

const Dashboard = () => (
  <div className="main">
    <div className="searchbar2">
      <input type="text" placeholder="Search" />
      <div className="searchbtn">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
          className="icn srchicn"
          alt="search-button"
        />
      </div>
    </div>

    <div className="box-container">
      <div className="box box1">
        <div className="text">
          <h2 className="topic-heading">60.5k</h2>
          <h2 className="topic">Article Views</h2>
        </div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
          alt="Views"
        />
      </div>

      <div className="box box2">
        <div className="text">
          <h2 className="topic-heading">150</h2>
          <h2 className="topic">Likes</h2>
        </div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
          alt="likes"
        />
      </div>

      <div className="box box3">
        <div className="text">
          <h2 className="topic-heading">320</h2>
          <h2 className="topic">Comments</h2>
        </div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
          alt="comments"
        />
      </div>

      <div className="box box4">
        <div className="text">
          <h2 className="topic-heading">70</h2>
          <h2 className="topic">Published</h2>
        </div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
          alt="published"
        />
      </div>
    </div>

    <div className="report-container">
      <div className="report-header">
        <h1 className="recent-Articles">Recent Articles</h1>
        <button className="view">View All</button>
      </div>

      <div className="report-body">
        <div className="report-topic-heading">
          <h3 className="t-op">Article</h3>
          <h3 className="t-op">Views</h3>
          <h3 className="t-op">Comments</h3>
          <h3 className="t-op">Status</h3>
        </div>

        <div className="items">
          {/* Your list of articles */}
          <div className="item1">
            <h3 className="t-op-nextlvl">Article 73</h3>
            <h3 className="t-op-nextlvl">2.9k</h3>
            <h3 className="t-op-nextlvl">210</h3>
            <h3 className="t-op-nextlvl label-tag">Published</h3>
          </div>
          <div className="item1">
            <h3 className="t-op-nextlvl">Article 72</h3>
            <h3 className="t-op-nextlvl">1.5k</h3>
            <h3 className="t-op-nextlvl">360</h3>
            <h3 className="t-op-nextlvl label-tag">Published</h3>
          </div>
          <div className="item1">
            <h3 className="t-op-nextlvl">Article 71</h3>
            <h3 className="t-op-nextlvl">1.1k</h3>
            <h3 className="t-op-nextlvl">150</h3>
            <h3 className="t-op-nextlvl label-tag">Published</h3>
          </div>
          {/* Continue other articles as needed */}
        </div>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div className="main">
    <h1>Articles Page</h1>
  </div>
);

const Report = () => (
  <div className="main">
    <h1>Report Page</h1>
  </div>
);

const Institution = () => (
  <div className="main">
    <h1>Institution Page</h1>
  </div>
);

const Profile = () => (
  <div className="main">
    <h1>Profile Page</h1>
  </div>
);

const Main = ({ page }) => {
  switch (page) {
    case "dashboard":
      return <Dashboard />;
    case "articles":
      return <Articles />;
    case "report":
      return <Report />;
    case "institution":
      return <Institution />;
    case "profile":
      return <Profile />;
    default:
      return <Dashboard />;
  }
};

export default Main;