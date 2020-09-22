/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_SFINGKS_GRAPHQLAPIIDOUTPUT
	API_SFINGKS_REWARDITEMTABLE_ARN
	API_SFINGKS_REWARDITEMTABLE_NAME
	API_SFINGKS_TRANSACTIONTABLE_ARN
	API_SFINGKS_TRANSACTIONTABLE_NAME
	API_SFINGKS_WALLETBALANCETABLE_ARN
	API_SFINGKS_WALLETBALANCETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { RewardItemDataProvider, WalletBalanceDataProvider, TransactionDataProvider } = require('./DataProviders');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

const dynamodb = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });
const rewardItemDataProvider = new RewardItemDataProvider(dynamodb, process.env.API_SFINGKS_REWARDITEMTABLE_NAME);
const transactionDataProvider = new TransactionDataProvider(dynamodb, process.env.API_SFINGKS_TRANSACTIONTABLE_NAME);
const walletBalanceDataProvider = new WalletBalanceDataProvider(dynamodb, process.env.API_SFINGKS_WALLETBALANCETABLE_NAME);


/**********************
 * Example get method *
 **********************/

app.get('/reward', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/reward/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/reward', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/reward/*', async function(req, res) {
  console.log('request:', req, res);

  const userId = getUserSubjectFromApigRequest(req.apiGateway.event);

  const itemId = req.path.split('/')[2]; // "path": "/reward/i123/redeem",
  try {
    const rewardItem = await rewardItemDataProvider.getRewardItem(itemId);
    console.log(rewardItem);
  } catch (error) {
    console.error('Failed to fetch item', error);
  }

  try {
    const walletBalance = await walletBalanceDataProvider.getBalance(userId);
    console.log(walletBalance);
  } catch (error) {
    console.error('Failed to fetch balance', error);
  }
  // todo check balance
  try {
    await transactionDataProvider.createTransaction(userId, itemId, 0);
  } catch (error) {
    console.error('Failed to create tx', error);
  }


  // return new balance
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/reward', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/reward/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/reward', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/reward/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

/**
 *
 * @param apigRequest An Apigateway Request Event
 * @returns {null|string} Returns the string Subject that represents the AWS Cognito User Subject
 */
function getUserSubjectFromApigRequest(apigRequestEvent) {
  try {
    return apigRequestEvent.requestContext.identity.cognitoAuthenticationProvider.split(':CognitoSignIn:')[1];
  } catch (e) {
    console.error('Failed to parse user subject', e);
  }
  return null;
}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
