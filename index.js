/*
if i want to use this, i'll have to change to action="/send-email" in the form  


import express from "express";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "blessingagharese@gmail.com",
    from: "your-email@example.com", // Authorized sender email
    subject: `Contact from ${name}`,
    text: message,
  };

  sgMail
    .send(msg)
    .then(() => res.status(200).send("Email sent successfully"))
    .catch((error) => res.status(500).send("Error sending email"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


*/
