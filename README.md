## Brief Introduction
A Simple fully functional E-commerce website frontend is implemented. 
Feature List:
* Customer registration using E-mail ID & Password
* Login feature using Email & Password
* Product listing page & Open Project description page 
* Purchase any particular product using 'Buy Now' option
* Razorpay payment gateway has been integrated. User can purchase products using multiple payment options - UPI, Card, NetBanking etc.
* Customer can check the orders list with payment status. 

## Next Phase Features
* Pagination features in Product listing
* Filter, Search features
* Cart feature to purchase multiple products in single order. 

## Tech stack
* Typescript 
* NextJS (React) Framework
* MaterialUI
* Tailwindcss
* Razorpay payment gateway JS module

## Dependencies
* Latest verson NodeJS

## Build & Run Steps Locally 
* Install required node packages
`npm install`
* Build
`npm run build`
* Set the required environmental variables. Copy .env.local to .env and set the API_URL (Backend URL) & Razorpay KEY ID
* Run the server
`npm run start`
* By default, frontend server will be listening at port 3000. 

## Cloud Hosting - Vercel Cloud & AWS Amplify 
Currently the application has been tested with Vercel Cloud & AWS Amplify
* Vercel Cloud Hosting - (Ref: https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy )
* AWS Amplify - required build configuration is provided in amplify.yml. Follow the steps mentioned (Ref https://docs.aws.amazon.com/amplify/latest/userguide/getting-started-next.html)
NOTE: Set the appropriate environmental variables while hosting. 
