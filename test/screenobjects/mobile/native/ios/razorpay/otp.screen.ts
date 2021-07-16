import IOTPScreen from "../../razorpay/otp.screen";
import RazorpayScreen from "./base.screen";
import CardDetailsScreen from "./carddetails.screen";

export default class OTPScreen extends RazorpayScreen implements IOTPScreen{
    private static skipSaveCardLocator = OTPScreen.predicateString('label == "Skip Saved Cards"');
    async skipSaveCard():Promise<CardDetailsScreen>{
        await (await driver.$(OTPScreen.skipSaveCardLocator)).click();
        return new CardDetailsScreen()
    }
}