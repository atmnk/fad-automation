import IPaymentMethodScreen from "../../razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import CardDetailsScreen from "./carddetails.screen";

export default class PaymentMethodScreen extends RazorpayScreen implements IPaymentMethodScreen{ 
    private static cardMethodSelector = 'android=new UiSelector().textContains("All cards supported")';
    async selectCardAsPaymentMethod():Promise<CardDetailsScreen>{
        await (await driver.$(PaymentMethodScreen.cardMethodSelector)).click();
        return new CardDetailsScreen()
    }
}