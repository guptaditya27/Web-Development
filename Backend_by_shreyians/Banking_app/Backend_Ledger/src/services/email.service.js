require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  const info = await transporter.sendMail({
    from: `"Backend-Ledger" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  return info;
};

async function sendRegistrationEmail(userEmail, name) {
  const recipientName = name?.trim() || 'there';
  const escapedName = recipientName.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

  const subject = 'Welcome to Backend Ledger!';
  const text = `Hi ${recipientName},\n\nYour Backend Ledger account has been registered successfully.`;
  const html = `<p>Hi ${escapedName},</p><p>Your Backend Ledger account has been registered successfully.</p>`;

  await sendEmail(userEmail, subject, text, html);
}

module.exports = { sendEmail, sendRegistrationEmail };
