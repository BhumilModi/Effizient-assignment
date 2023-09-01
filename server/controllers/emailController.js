const sendgrid = require("@sendgrid/mail");
const EMAIL_SENDER = require("../constants");

const sendEmail = async (req, res) => {
  let emailBody = "";

  Object.entries(req.body).forEach((e) => {
    emailBody += e[0] + " : " + e[1] + "\n";
  });

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  // Email content
  const mailOptions = {
    from: EMAIL_SENDER, // Sender email address
    to: req.body.email, // Recipient email address
    cc: "",
    subject: "Statement of Purpose draft", // Email subject
    text: `The submitted response is : \n ${emailBody}`, // Email text body
  };

  sendgrid.send(mailOptions, (error, message) => {
    if (error) {
      res.status(500).json({ message: "Email undelivered" });
    } else {
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = sendEmail;
