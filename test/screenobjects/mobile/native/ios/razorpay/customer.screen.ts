import ICustomerScreen from "../../razorpay/customer.screen";
import IPaymentMethodScreen from "../../razorpay/paymentmethod.screen";
import RazorpayScreen from "./base.screen";
import PaymentMethodScreen from "./paymentmethod.screen";

export default class CustomerScreen extends RazorpayScreen implements ICustomerScreen{
    private static mobileLocator = CustomerScreen.classChain('**/XCUIElementTypeOther[`label == "Razorpay Checkout"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[2]');
    private static emailLocator = CustomerScreen.classChain('**/XCUIElementTypeOther[`label == "Razorpay Checkout"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[3]')
    private static pageLocator = CustomerScreen.predicateString('label == "₹ 1"');
    private static proceedButtonLocator = CustomerScreen.predicateString('label == "PROCEED"');
    async addDetails(mobile:string,email:string):Promise<PaymentMethodScreen>{
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