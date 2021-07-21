import * as find from "appium-flutter-finder"
import { expect } from "chai";
import HomeScreen from "../screenobjects/mobile/flutter/home.screen";
describe('Counter', () => {
    it('Purchase Increament', async () => {
  const value = await new HomeScreen()
    .add()
    .then(customerScreen=>{
      return customerScreen
        .addDetails('9833821606','naik_atmaram@yahoo.com')
        
    }).then(paymentMthodScreen=>{
      return paymentMthodScreen
      .selectCardAsPaymentMethod()
      
    }).then(otpScreen=>{
      return otpScreen
      .skipSaveCard()
    }).then(cardDetailsScreen=>{
      return cardDetailsScreen
      .pay('41111111111111111','1122','Atmaram Naik','111')
    }).then(decideStatus=>{
      return decideStatus
      .makeSuccessful();
    }).then(homeScreen=>{
      return homeScreen
      .waitForPaymentSuccess();
    }).then(homeScreen =>{
      return homeScreen.getCounter()
    })
    expect(value).to.be.eq('1')
    });
});

