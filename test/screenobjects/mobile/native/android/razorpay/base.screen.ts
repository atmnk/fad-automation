export default class RazorpayScreen{
    protected async typeAfterClicking(locator:string,value:string){
        let el = await driver.$(locator);
        await el.click();
        await el.setValue(value);
    }
}