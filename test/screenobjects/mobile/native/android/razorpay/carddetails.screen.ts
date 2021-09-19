import ICardDetailsScreen from "../../common/razorpay/carddetails.screen";
import RazorpayScreen from "./base.screen";
import DecidePaymentStatusScreen from "./decide.screen";

export default class CardDetailsScreen extends RazorpayScreen implements ICardDetailsScreen{
    private static cardNumberLocator = 'android=new UiSelector().resourceId("card_number")';
    private static expiryLocator = 'android=new UiSelector().resourceId("card_expiry")';
    private static nameLocator = 'android=new UiSelector().resourceId("card_name")';
    private static cvvLocator = 'android=new UiSelector().resourceId("card_cvv")';
    private static rememberCardLocator = 'android=new UiSelector().resourceId("should-save-card")';
    private static payLocator = 'android=new UiSelector().resourceId("footer")';
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