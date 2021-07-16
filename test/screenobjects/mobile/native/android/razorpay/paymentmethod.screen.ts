import IOTPScreen from "../../razorpay/otp.screen";
import IPaymentMethodScreen from "../../razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import OTPScreen from "./otp.screen";

export default class PaymentMethodScreen extends RazorpayScreen implements IPaymentMethodScreen{ 
    private static cardMethodSelector = 'android=new UiSelector().text("Card Visa, MasterCard, RuPay, and Maestro")';
    async selectCardAsPaymentMethod():Promise<OTPScreen>{
        await (await driver.$(PaymentMethodScreen.cardMethodSelector)).click();
        return new OTPScreen()
    }
}