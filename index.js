import express from 'express';
import sendEmail from './sendEmail';

const app = express();
const port = process.env.PORT || 2000;

app.use('/send', sendEmail);
app.listen(port, () => {
  console.log(`server start on ${port}`);
});
