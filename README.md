## **Instructions on to use the code locally**

## **Front-End** -

- Navigate to the front-end directory named client using command in the terminal  - `cd client `

- Download all the necessary dependencies need to run the program using command - `npm install `

- To run the app and start development server use the following command - `npm start `

- After this you can go to http://localhost:3000/ where the front-end app would be available.

## **Set up Email Service** -

- We need to make API keys for connecting to all SendGrid’s services which will be used to send email by the backend.

- Go to www.sendgrid.com and create or log in with the email that you want to send email from.

- From the left side menu, go to setting and then to API keys.

- Click the Create API Key button on the top-right of the page to create a new API key. A new screen will appear.

- Inside the API Key Name field, enter the name for your API key.

- In the API Key Permissions section, select either Full Access or Restricted Access. If you decide to restrict access, be sure that the key has access to the Mail Send option.

- Click the Create & View button. You will be presented with your SendGrid API key.

- Take note of the SendGrid API key you’ve been provided. You will need it for the next steps in setting up the SendGrid Add-On. (Note: For security purposes, SendGrid does not allow the key value to be displayed for existing API keys.)

- Save this API key as this has to be added in .env file in server directory.

## **Generate OpenAI API key** -

- Create an OpenAI account by navigating to https://www.openai.com/ or log in to any existing account you want to use.

- After logging in, in the top right corner of your screen you'll see an icon with your account name. Click it to open the dropdown menu then click "View API keys".

- Click on the "Create new secret key" button to generate a new API key.

- After that enter a name for your key and click the "Create secret key" button.

- Copy the generated API key and save it with the Access key we made in above step. Both of these will be used to send customized SOP in the mail.

## **Back-End(server)** -

- Navigate to the backend-end directory named server using command in the terminal - `cd server `

- Download all the necessary dependencies need to run the program using command - `npm install `

- To run the app and start express server use the following command - `npm run start `

- After this you can see the log in the terminal were onto successful we can see the server running on port 8080.


