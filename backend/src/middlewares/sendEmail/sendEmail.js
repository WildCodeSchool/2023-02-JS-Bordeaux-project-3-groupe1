const mailer = require("./mailer");

const sendEmail = (response) => {
  mailer.sendMail(
    {
      from: "t.cathelot.pro@gmail.com",
      to: response.email,
      subject: "réinitialisation de vôtre mot de passe",
      html: "<hmtl><head><style>p{font-size:20px;padding-top:3rem;text-align:center;border-radius:10px;height:20vh;background-color:#D5EDFF}</style></head><p>Un soucis de mot de passe? Cliquez sur ce lien pour le modifier!</p></html>",
    },
    (err, info) => {
      if (err) console.error(err);
      else console.info(info);
    }
  );
};
module.exports = {
  sendEmail,
};
