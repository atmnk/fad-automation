import IOTPScreen from "../../flutter/razorpay/otp.screen";
import RazorpayScreen from "./base.screen";
import CardDetailsScreen from "./carddetails.screen";

export default class OTPScreen extends RazorpayScreen implements IOTPScreen{
    private static skipSaveCardLocator = 'android=new UiSelector().resourceId("otp-sec")';
    async skipSaveCard():Promise<CardDetailsScreen>{
        await (await driver.$(OTPScreen.skipSaveCardLocator)).click();
        return new CardDetailsScreen()
    }
}