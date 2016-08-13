import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.methods({
    "contact.sendEmail": function (name, email, message) {
      Email.send({
        to: "jeremychen0127@gmail.com",
        from: "contact@jeremy-chen.com",
        subject: name + " Sent You a Message From Website",
        html: "<p>" + message + "</p><br /><br />" + name + "'s Email: " + email
      });
    }
  });
}