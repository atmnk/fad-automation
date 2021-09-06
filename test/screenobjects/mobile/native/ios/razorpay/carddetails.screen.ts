import ICardDetailsScreen from "../../razorpay/carddetails.screen";
import IDecidePaymentStatusScreen from "../../razorpay/decide.screen";
import RazorpayScreen from "./base.screen";
import DecidePaymentStatusScreen from "./decide.screen";
import PaymentMethodScreen from "./paymentmethod.screen";

export default class CardDetailsScreen extends RazorpayScreen implements ICardDetailsScreen{
    private static cardNumberLocator = CardDetailsScreen.classChain('**/XCUIElementTypeOther[`label == "Razorpay Checkout"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[1]');
    private static expiryLocator = CardDetailsScreen.predicateString('value == "MM / YY"');
    private static nameLocator = CardDetailsScreen.classChain('**/XCUIElementTypeOther[`label == "Razorpay Checkout"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[3]');
    private static cvvLocator = CardDetailsScreen.classChain('**/XCUIElementTypeOther[`label == "Razorpay Checkout"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[4]');
    private static rememberCardLocator = CardDetailsScreen.predicateString('label == "Remember Card" AND name == "Remember Card" AND value == "emember Card"');
    private static payLocator = CardDetailsScreen.predicateString('label == "PAY ₹ 1"');
    async pay(card:string,expiry:string,name:string,cvv:string):Promise<DecidePaymentStatusScreen>{
        await this.typeAfterClicking(CardDetailsScreen.cardNumberLocator,
        card
        );
        await this.typeAfterClicking(CardDetailsScreen.expiryLocator,
        expiry
        );
        await this.typeAfterClicking(CardDetailsScreen.nameLocator,
        name
        );
        await this.typeAfterClicking(CardDetailsScreen.cvvLocator,
        cvv
        );
        await (await driver.$(CardDetailsScreen.rememberCardLocator)).click();
        await (await driver.$(CardDetailsScreen.payLocator)).click();
        return new DecidePaymentStatusScreen();

    }
}