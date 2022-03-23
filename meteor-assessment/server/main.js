import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";
import { AuthCollection } from "/imports/api/auth";
import { DashboardCollection } from "/imports/api/dashboard";

// function insertLink({ title, url }) {
//   LinksCollection.insert({ title, url, createdAt: new Date() });
// }

function insertUser({ email, password }) {
  AuthCollection.insert({ email, password });
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
});
