require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");

const app = express();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static("."));

app.post("/chat", async (req, res) => {
    try {
        const question = req.body.question;

        if (!question) {
            return res.status(400).json({
                error: "Question missing"
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            input: question
        });

        res.json({
            answer: response.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "AI response nahi aa paya."
        });
    }
});

app.listen(3000, () => {
    console.log("🤖 My AI running at http://localhost:3000");
});
