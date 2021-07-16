import IHomeScreen from "../../flutter/app/home.screen";
import IDecidePaymentStatusScreen from "../../flutter/razorpay/decide.screen";
import RazorpayScreen from "./base.screen";
import * as find from "appium-flutter-finder"
import HomeScreen from "../../flutter/app/home.screen";
export default class DecidePaymentStatusScreen extends RazorpayScreen implements IDecidePaymentStatusScreen{
    private static successLocator = DecidePaymentStatusScreen.predicateString('label == "Success"');
    async makeSuccessful():Promise<HomeScreen>{
        await (await driver.$(DecidePaymentStatusScreen.successLocator)).click();
        await driver.switchContext('FLUTTER');
        return new HomeScreen()
    }
}