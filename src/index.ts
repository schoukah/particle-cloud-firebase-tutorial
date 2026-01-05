import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.insertFromPubSub = functions.pubsub
    .topic("humitemp")
    .onPublish((message: functions.pubsub.Message, context: functions.EventContext) => {
      console.log("message triggered at", context.timestamp);
      const messageBody = message.data ?
      Buffer.from(message.data, "base64").toString() : null;
      console.log("full message", messageBody);
      let serialNumber = message.attributes.device_id;
      let publishTime = message.attributes.published_at;
      let temp = message.json.t;
      let humidite = message.json.h;
      let pointRosee = message.json.dp;
      try {
        serialNumber = message.attributes.device_id;
        publishTime = message.attributes.published_at;
        // t = message.attributes.t;
        console.log("serial Number", serialNumber);
        console.log("published at", publishTime);
        console.log("t", temp);
        console.log('humidite', humidite);
        console.log("Point de rosée", pointRosee);
      } catch (e) {
        functions.logger.error("Subpub attribute message error:", e);
      }
      const sensorInfo = {
        "message": messageBody,
        "numero_serie": serialNumber,
        "date_publication": publishTime,
        "temperature": temp,
        "humidite" : humidite,
        "point_de_rosee" : pointRosee,
      };
      return admin.firestore().collection("lecturesAir").add(sensorInfo);
    });
