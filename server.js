const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Define API routes here
app.post("/api/email", (req, res) => {
  // return res.json("sent")
  const output = `
    <p>You have a new quote request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "garyjllil@outlook.com", // generated ethereal user
        pass: process.env.secret, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"InterCraft Upholstery" <garyjllil@outlook.com>', // sender address
      to: "itasghar786@gmail.com", // list of receivers
      subject: "New quote request", // Subject line
      text: null,
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main()
    .then(() => {
      res.json("sent");
    })
    .catch((err) => console.log(err));
});

// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
