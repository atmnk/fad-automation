import IOTPScreen from "../../common/razorpay/otp.screen";
import IPaymentMethodScreen from "../../common/razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import OTPScreen from "./otp.screen";

export default class PaymentMethodScreen extends RazorpayScreen implements IPaymentMethodScreen{ 
    private static cardMethodSelector = PaymentMethodScreen.predicateString('label == "Card"');
    async selectCardAsPaymentMethod():Promise<OTPScreen>{
        await (await driver.$(PaymentMethodScreen.cardMethodSelector)).click();
        return new OTPScreen()
    }
}