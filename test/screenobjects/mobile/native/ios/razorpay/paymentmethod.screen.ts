import IPaymentMethodScreen from "../../razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import CardDetailsScreen from "./carddetails.screen";

export default class PaymentMethodScreen extends RazorpayScreen implements IPaymentMethodScreen{ 
    private static cardMethodSelector = PaymentMethodScreen.predicateString('label == "Pay using Card"');
    async selectCardAsPaymentMethod():Promise<CardDetailsScreen>{
        await (await driver.$(PaymentMethodScreen.cardMethodSelector)).click();
        return new CardDetailsScreen()
    }
}