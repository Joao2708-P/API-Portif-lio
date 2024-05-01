import express from 'express';
import sendEmail from '../Controller/sendEmail.controller';

const router = express.Router();

router.get('/', async(req, res) => {
    res.send("Hello World")
});

router.post('/send', sendEmail)

export default router