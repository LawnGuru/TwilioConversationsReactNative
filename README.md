# React application with Express server

This project was bootstrapped with the command:

   ```bash
    npx react-native init TwilioConversationsReactNative --version 0.64.2
   ```

## Using this project

1. Clone the project, change into the directory and install the dependencies.

   ```bash
   git clone https://github.com/pedro-pinho/foo-bar.git
   cd foo-bar
   npm install
   ```

2. Create a `.env` file for environment variables in your server.

   ```bash
   touch .env
   ```

   Insert your own credentials there, it should look like this:

   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxx
   TWILIO_PHONE_NUMBER=+1xxxxxxxx
   TWILIO_API_KEY=SKxxxxxxxxxxxxxxxxxx
   TWILIO_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxx
   ```

3. Start the server

   You can start the server on its own with the command:

   ```bash
   npm run server
   ```

   Run the React application on its own with the command:

   ```bash
   npm start
   ```

   Run both applications together with the command:

   ```bash
   npm run dev
   ```

   The React application will run on port 3000 and the server port 8081.

## Logs
   The log for the command bellow can be found in the file logs/2021-10-27T17_30_16_062Z-debug.log
   ```bash
   npm install --save @twilio/conversations
   ```

