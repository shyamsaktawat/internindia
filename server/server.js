
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5001;  

app.use(cors());
app.use(express.json());

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the current directory
app.use(express.static(__dirname));

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: 'shyamsaktawat1@gmail.com', // Your Gmail address
        pass: 'gbfp zjnz sydw geyj' // The App Password you generated
    }
});
app.post('/submit-application', upload.single('image'), async (req, res) => {
    const { fullName, email, phone } = req.body;
    const image = req.file;

    if (!image) {
        return res.status(400).send('No image uploaded');
    }

    const mailOptions = {
        from: '"Internship Program" <' + '>',
        to: email,
        subject: 'Internship Application Received',
        html: `
            <h1>Thank you for your application, ${fullName}!</h1>
            <p>We've received your application for the internship.</p>
            <p>We'll contact you at ${email} or ${phone} with further details.</p>
        `,
        attachments: [
            {
                filename: image.originalname,
                path: image.path
            }
        ]
    };

    try {
        console.log('Attempting to send email...');
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Application submitted successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});