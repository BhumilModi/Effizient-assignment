const sendgrid = require("@sendgrid/mail");

const sendEmail = async (req, res) => {
  let emailBody = "";

  Object.entries(req.body).forEach((e) => {
    emailBody += e[0] + " : " + e[1] + "\n";
  });

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_SENDER, // Sender email address
    to: req.body.email, // Recipient email address
    cc: "",
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      subject: `Statement of Purpose Response by ${req.body.firstName} ${req.body.lastName}`, // Email subject
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      institute: req.body.institute,
      course: req.body.course,
      work: req.body.work,
      admitted: req.body.admitted,
      program: req.body.program,
      country: req.body.country,
      goals: req.body.goals,
      feesPaid: req.body.feesPaid || 0,
      gic: req.body.gic || 0,
    }
  };

  sendgrid.send(mailOptions, (error) => {
    if (error) {
      console.log(error.response.body)
      res.status(500).json({ message: "Email undelivered" });
    } else {
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = sendEmail;
