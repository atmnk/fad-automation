import ICustomerScreen from "../../common/razorpay/customer.screen";
import IPaymentMethodScreen from "../../common/razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import PaymentMethodScreen from "./paymentmethod.screen";

export default class CustomerScreen extends RazorpayScreen implements ICustomerScreen{
    private static mobileLocator = 'android=new UiSelector().resourceId("contact")';
    private static emailLocator = 'android=new UiSelector().resourceId("email")'
    private static pageLocator = 'android=new UiSelector().resourceId("curtain-overlay")';
    private static proceedButtonLocator = 'android=new UiSelector().resourceId("footer")';
    async addDetails(mobile:string,email:string):Promise<PaymentMethodScreen>{
        driver
        await this.typeAfterClicking(
            CustomerScreen.mobileLocator,
            mobile
            );
        await this.typeAfterClicking(
            CustomerScreen.emailLocator
        ,
        email
        );
        await (await driver.$(CustomerScreen.pageLocator)).click();
        await (await driver.$(CustomerScreen.proceedButtonLocator)).click();
        return new PaymentMethodScreen()
    }
}