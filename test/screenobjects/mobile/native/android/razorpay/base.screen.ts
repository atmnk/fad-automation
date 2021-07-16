export default class RazorpayScreen{
    protected async typeAfterClicking(locator,value){
        let el = await driver.$(locator);
        await el.click();
        await el.setValue(value);
    }
}