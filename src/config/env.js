require('dotenv').config();

const APP_PORT = +process.env.PORT || 3000;
const SERVICE_NAME = process.env.SERVICE_NAME || 'TaskReminderService';

module.exports = {
  APP_PORT,
  SERVICE_NAME,
};
