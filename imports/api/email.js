import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const MessageCollection = new Mongo.Collection("temp.message");

if (Meteor.isServer) {
  Meteor.publish("temp.message", function () {
    return MessageCollection.find({});
  });
  
  Meteor.methods({
    "temp.message.addMessage": function (name, email, message) {
      MessageCollection.insert({
        name: name,
        email: email,
        message: message
      });
    }
  });
}