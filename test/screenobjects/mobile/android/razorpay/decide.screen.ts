import HomeScreen from "../../common/app/home.screen";
import IHomeScreen from "../../common/app/home.screen";
import IDecidePaymentStatusScreen from "../../common/razorpay/decide.screen";
import RazorpayScreen from "./base.screen";
import CardDetailsScreen from "./carddetails.screen";

export default class DecidePaymentStatusScreen extends RazorpayScreen implements IDecidePaymentStatusScreen{
    private static successLocator = 'android=new UiSelector().text("Success")';
    async makeSuccessful():Promise<HomeScreen>{
        await (await driver.$(DecidePaymentStatusScreen.successLocator)).click();
        await driver.switchContext('FLUTTER');
        return new HomeScreen()
    }
}