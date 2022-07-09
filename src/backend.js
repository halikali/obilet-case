const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

let sessionInfo = {
  deviceId: "",
  sessionId: "",
};

const api = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic JEcYcEMyantZV095WVc3G2JtVjNZbWx1",
      "Access-Control-Allow-Origin": true,
    },
    baseURL: "https://v2-api.obilet.com/api",
  });
};

app.get("/api/startSession", async (req, res) => {
  await api()
    .post("/client/getsession", {
      type: 1,
      connection: {
        "ip-address": "165.114.41.21",
        port: "5117",
      },
      browser: {
        name: "Chrome",
        version: "47.0.0.12",
      },
    })
    .then((response) => {
      console.log("seeeion has been started");
      sessionInfo.deviceId = response.data.data["device-id"];
      sessionInfo.sessionId = response.data.data["session-id"];
      res.json(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/api/getAllLocations", (req, res) => {
  api()
    .post("/location/getbuslocations", {
      data: null,
      "device-session": {
        "session-id": sessionInfo.sessionId,
        "device-id": sessionInfo.deviceId,
      },
      date: new Date(),
      language: "tr-TR",
    })
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

app.get("/api/getJourneys", async (req, res) => {
  let origin = JSON.parse(req.query.origin);
  let destination = JSON.parse(req.query.destination);

  await api()
    .post("/journey/getbusjourneys", {
      "device-session": {
        "session-id": sessionInfo.sessionId,
        "device-id": sessionInfo.deviceId,
      },
      date: new Date(),
      language: "tr-TR",
      data: {
        "origin-id": origin.id,
        "destination-id": destination.id,
        "departure-date": req.query.departureDate,
      },
    })
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
