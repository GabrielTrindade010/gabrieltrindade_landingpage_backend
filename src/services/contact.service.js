const transporter = require("../config/mail");
const SendContactDTO = require("../dto/SendContactDTO");

class ContactService {
  async execute(data) {
      const { name, email, message } = new SendContactDTO(
          data.name,
          data.email,
          data.message
        );

    await transporter.sendMail({
      from: `"Contato Site" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Novo contato do site",
      html: this.buildTemplate({ name, email, message }),
    });
  }

  buildTemplate({ name, email, message }) {
    return `
      <h2>Novo contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `;
  }
}

module.exports = ContactService;