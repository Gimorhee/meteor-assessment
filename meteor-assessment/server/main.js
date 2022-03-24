import { Meteor } from "meteor/meteor";
import { AuthCollection } from "/imports/api/auth";
import { FeedsCollection } from "../imports/api/feeds";
import { AlertsCollection } from "/imports/api/alerts";

function insertUser({ email, password }) {
  AuthCollection.insert({ email, password });
}

function addAlert({ text }) {
  AlertsCollection.insert({ text });
}

function addFeed({ email, text }) {
  FeedsCollection.insert({ email, text, createdAt: new Date() });
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

  if (AuthCollection.find().count() > 0) {
    AuthCollection.remove("dhxJrv9MewgvpFPJ7");
  }

  if (FeedsCollection.find().count() === 0) {
    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "This is the first test feed!",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "Hi everyone! this is the second test feed!",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "Third one!",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "Here comes the 4th one!",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "I am the fifth feed.",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "Sixth!",
    });

    addFeed({
      email: "dongyunrhee@gmail.com",
      text: "This is the 7th! the weather is hella good today",
    });
  }
});
