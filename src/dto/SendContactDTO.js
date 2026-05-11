class SendContactDTO {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;

    this.validate();
  }

  validate() {
    if (!this.name || typeof this.name !== "string") {
      throw new Error("Name is required and must be a string");
    }

    if (!this.email || typeof this.email !== "string") {
      throw new Error("Email is required and must be a string");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email)) {
      throw new Error("Invalid email format");
    }

    if (!this.message || typeof this.message !== "string") {
      throw new Error("Message is required and must be a string");
    }
  }
}

module.exports = SendContactDTO;