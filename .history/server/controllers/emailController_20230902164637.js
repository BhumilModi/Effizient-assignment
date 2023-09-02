const sendgrid = require("@sendgrid/mail");
const { OpenAI } = require("openai")
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const sendEmail = async (req, res) => {

  const prompt = `SOP to study in canada to visa office using following informations - 
  Name - ${req.body.firstName} ${req.body.lastName}
  Email address - ${req.body.email}
  Age - ${req.body.age}
  Institute where you completed your highest level of education - ${req.body.institute}
  Current Country - ${req.body.country}
  What did you study? - ${req.body.course}
  Do you have any relevant work experience? - ${req.body.work}
  What institute did you get admitted to in Canada? - ${req.body.admitted}
  What is your program of study in Canada? - ${req.body.program}
  What are your future goals? - ${req.body.goals}
  English Scores in Listening - ${req.body.listeningScore}
  English Scores in Reading - ${req.body.readingScore}
  English Scores in Writting - ${req.body.writtingScore}
  English Scores in Speaking - ${req.body.speakingScore} 
  `
  if (req.body.isFeesPaid) {
    prompt + `Amount Paid for Tuition Fees - ${req.body.feesPaid}`
  }

  if (req.body.isGic) {
    prompt + `Amount Paid towards GIC - ${req.body.gic}`
  }

  const emailBody = `Dear ${req.body.firstName} ${req.body.lastName}, \n \nBelow is the Statement of Purpose template for your student visa application to Canada. Kindly edit it as per your scenario and needs. \n\nIn case you would like to get the full statement of purpose drafted by our experts, do not hesitate to contact us. \n \n`

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", "content": prompt }],
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_SENDER, // Sender email address
    to: req.body.email, // Recipient email address
    cc: "",
    subject: `Statement of Purpose for ${req.body.firstName} ${req.body.lastName}`, // Email subject
    text: emailBody + response.choices[0].message.content
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
