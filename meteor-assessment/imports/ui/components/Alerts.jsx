import React, { useEffect } from "react";
import { AlertsCollection } from "../../api/alerts";
import { useTracker } from "meteor/react-meteor-data";

const Alerts = () => {
  const alerts = useTracker(() => AlertsCollection.find({}).fetch());

  useEffect(() => {
    console.log("ALERTS: ", alerts);
    if (alerts.length > 0) {
      alerts.map((alert) => {
        setTimeout(() => {
          AlertsCollection.remove(alert._id);
        }, 3500);
      });
    }
  }, [alerts]);

  return (
    <ul className="alerts">
      {alerts.map((alert, i) => (
        <li key={`alert=${i}`}>{alert.text}</li>
      ))}
    </ul>
  );
};

export default Alerts;
