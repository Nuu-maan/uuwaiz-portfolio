const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Endpoint for handling form submission
app.post('/send', async (req, res) => {
    try {
        const { name, age, gender, bgmiId, contactNumber, message } = req.body;

        // Validate required fields
        if (!name || !age || !gender || !bgmiId || !contactNumber || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Log form submission
        console.log('Form submission received:', req.body);

        // Prepare Discord webhook payload
        const payload = {
            embeds: [{
                title: 'New Contact Form Submission',
                color: 16711680, // Red color
                fields: [
                    { name: 'Name', value: name, inline: true },
                    { name: 'Age', value: age.toString(), inline: true }, // Convert age to string
                    { name: 'Gender', value: gender.charAt(0).toUpperCase() + gender.slice(1), inline: true }, // Capitalize gender
                    { name: 'BGMI ID', value: bgmiId },
                    { name: 'Contact Number', value: contactNumber },
                    { name: 'Message', value: message }
                ]
            }],
            content: '@everyone'
        };

        // Replace with your actual Discord webhook URL
        const webhookUrl = 'https://discord.com/api/webhooks/1261654790421741568/tcR1L8tI2mIz8ZV89DAA2FKiwx6zoEgHUXrK0nz8ruGqVj8Vl5GCl76ZUpAN2XX96WDu'; // Replace with your actual Discord webhook URL

        // Send payload to Discord webhook
        const response = await axios.post(webhookUrl, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Log Discord webhook response
        console.log('Discord webhook response:', response.data);

        // Send success response to client
        res.status(200).json({ message: 'Message sent to Discord webhook' });
    } catch (error) {
        // Handle errors
        console.error('Error sending to Discord webhook:', error.message);
        res.status(500).json({ error: 'Error sending to Discord webhook', details: error.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
