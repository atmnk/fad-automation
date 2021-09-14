import * as find from "appium-flutter-finder"
import { expect } from "chai";
import HomeScreen from "../screenobjects/mobile/flutter/home.screen";
import {random_email, random_mobile} from "../util"
describe('Counter', () => {
    it('Purchase Increament', async () => {

      const value = await(await(await(await(await(await(await new HomeScreen()
      .add())
      .addDetails(random_mobile(),random_email()))
      .selectCardAsPaymentMethod())
      .pay('41111111111111111','1122','Atmaram Naik','111'))
      .makeSuccessful())
      .waitForPaymentSuccess())
      .getCounter()
      expect(value).to.be.eq('1')
    });
});

