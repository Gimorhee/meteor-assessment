import React, { useEffect, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { FeedsCollection } from "../../api/feeds";
import { AlertsCollection } from "../../api/alerts";

const Dashboard = () => {
  const feeds = useTracker(() => FeedsCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const [feedInput, setFeedInput] = useState("");

  const onFeedSubmit = (e) => {
    e.preventDefault();

    if (feedInput === "") {
      AlertsCollection.insert({
        text: "Please enter any comment.",
      });
    } else {
      FeedsCollection.insert({
        email: localStorage.getItem("user"),
        text: feedInput,
        createdAt: new Date(),
      });

      setFeedInput("");
    }
  };

  return (
    <div className="dashboard">
      <form className="feed-input" onSubmit={(e) => onFeedSubmit(e)}>
        <input type="text" value={feedInput} placeholder="What is on your mind?" onChange={(e) => setFeedInput(e.target.value)} />
        <button>ADD</button>
      </form>

      <div className="feeds">
        {feeds &&
          feeds.map((feed, i) => (
            <div className="feed" key={`feed-${i}`}>
              <span>From: {feed.email}</span>
              <p>{feed.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
