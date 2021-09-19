import * as find from "appium-flutter-finder"
import CustomerScreenAndroid from "../native/android/razorpay/customer.screen";
import CustomerScreenIOS from "../native/ios/razorpay/customer.screen";
import ICustomerScreen from "../native/common/razorpay/customer.screen";
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
        return driver.getElementText(HomeScreen.counterText)
    }
    async waitForPaymentSuccess():Promise<HomeScreen>{
        await driver.execute('flutter:waitFor', find.byText('Payment Successful'));
        return this;
    }
}