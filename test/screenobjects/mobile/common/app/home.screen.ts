import * as find from "appium-flutter-finder"
import CustomerScreenAndroid from "../../android/razorpay/customer.screen";
import IHomeScreen from "../../common/app/home.screen";
import CustomerScreenIOS from "../../ios/razorpay/customer.screen";
import ICustomerScreen from "../razorpay/customer.screen";
export default class HomeScreen {
    private static addButton = find.byValueKey('Add');
    private static counterText = find.byValueKey('counter');

    async add():Promise<ICustomerScreen>{
        await driver.elementClick(HomeScreen.addButton);
        await driver.switchContext('NATIVE_APP');
        if (process.env.PLATFORM == 'iOS') {
            return new CustomerScreenIOS();
        } else {
            return new CustomerScreenAndroid();
        }
        
    }
    async getCounter():Promise<string>{
        return await driver.getElementText(HomeScreen.counterText)
    }
    async waitForPaymentSuccess():Promise<HomeScreen>{
        await driver.execute('flutter:waitFor', find.byText('Payment Successful'));
        return this;
    }
}