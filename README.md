# React Native application with Express server

This project was bootstrapped with the command:

   ```bash
    npx react-native init TwilioConversationsReactNative --version 0.64.2
   ```

## Using this project

1. Clone the project, change into the directory and install the dependencies.

   ```bash
   git clone https://github.com/LawnGuru/TwilioConversationsReactNative.git
   cd TwilioConversationsReactNative
   npm install --ignore-scripts
   ```

   The flag --ignore-scripts is due to @twilio/conversations throwing errors without it. More about this on the next section.

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

   You can start the server at port 8082 with the command:

   ```bash
   npm run server
   ```

4. Start metro

   Run the command bellow inside your React Native project folder:

   ```bash
   npm run start
   ```
5. Start the application on Android or iOs

    Connect your Android with an USB cable or launch an Android emulator with Android Studio, then run:

    ```bash
    adb reverse tcp:8082 tcp:8082
    npm run android
    ```

    Connect your iOs with a lightning cable or launch an iPhone emulator with XCode, then run:

    ```bash
    cd ios
    pod install
    npm run ios
    ```

## Logs for commands

1. The log for the command *npm install --save @twilio/conversations* can be found in the file 

   ```
   logs/2021-10-27T17_30_16_062Z-debug.log
   ```

# Expected error

![expected error](https://i.imgur.com/wgReTQ8.png)