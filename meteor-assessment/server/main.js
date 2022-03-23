import { Meteor } from "meteor/meteor";
import { AuthCollection } from "/imports/api/auth";
import { DashboardCollection } from "/imports/api/dashboard";
import { AlertsCollection } from "/imports/api/alerts";

function insertUser({ email, password }) {
  AuthCollection.insert({ email, password });
}

function addAlert({ text }) {
  AlertsCollection.insert({ text });
}

Meteor.startup(() => {
  if (AuthCollection.find().count() === 0) {
    insertUser({
      email: "dongyunrhee@gmail.com",
      password: "123123",
    });

    insertUser({
      email: "test1@gmail.com",
      password: "123123",
    });

    insertUser({
      email: "test2@gmail.com",
      password: "123123",
    });
  }

  //   if (AuthCollection.find().count() > 0) {
  //     AuthCollection.remove("dhxJrv9MewgvpFPJ7");
  //   }

  if (AlertsCollection.find().count() === 0) {
    addAlert({
      text: "TESTING ALERT1",
    });

    addAlert({
      text: "TESTING ALERT2",
    });
  }
});
