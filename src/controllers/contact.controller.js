const ContactService = require("../services/contact.service");
const contactSchema = require("../validators/contact.schema");

class ContactController {
    async handle(req, res) {
        try {
            const data = contactSchema.parse(req.body);

            const service = new ContactService();
            await service.execute(data);

            return res.status(200).json({ success: true });
        } catch (error) {
            if (error.errors) {
                return res.status(400).json({
                error: "Validation failed",
                details: error.errors,
                });
            }

            console.log(error)

            return res.status(500).json({
                error: "Internal server error",
            });
        }
    }
}

module.exports = new ContactController();