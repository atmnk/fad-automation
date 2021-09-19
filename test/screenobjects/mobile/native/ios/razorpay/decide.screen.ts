import IDecidePaymentStatusScreen from "../../common/razorpay/decide.screen";
import RazorpayScreen from "./base.screen";
import HomeScreen from "../../../flutter/home.screen";
export default class DecidePaymentStatusScreen extends RazorpayScreen implements IDecidePaymentStatusScreen{
    private static successLocator = DecidePaymentStatusScreen.predicateString('label == "Success"');
    async makeSuccessful():Promise<HomeScreen>{
        await (await driver.$(DecidePaymentStatusScreen.successLocator)).click();
        await driver.switchContext('FLUTTER');
        return new HomeScreen()
    }
}