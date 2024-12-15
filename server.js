//
// server.js
//
const express = require("express");
const os = require("os");

const app = express();

const port = process.env.PORT || 5000;

function getDateTime(dateIn){
  let dateString = dateIn.toString()
  let dateBase = new Date(dateString) // truncated date since milliseconds are not included
  let millisDelta = dateIn - dateBase
  let dateStringMillis = dateString.replace(/(^.*:\d\d:\d\d)(.*$)/, `$1:${millisDelta}$2`)

  return (dateStringMillis)
}

app.get("/", (req, res) => {
  console.log("Method Begins...");
  
  let theDate = new Date();
  let hostName = os.hostname();

  let dateString = getDateTime(theDate);
  

  let returnValue = "Hello World From GitLab |eric-node-js-xpres6| ZZZZ HostName: " + hostName + " TimeNow: " + dateString + " ";

  console.log("returnValue: " + returnValue);

  console.log("Method Ends...");

  return res.status(200).send({
    message: returnValue,
  });


});

app.listen(port, () => {
  console.log("Listening on " + port);
});

module.exports = app;

