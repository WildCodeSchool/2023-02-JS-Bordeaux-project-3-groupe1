const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "t.cathelot.pro@gmail.com",
    to: "to.cathelot@gmail.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.info(info, "je suis renté ici");
  }
);
