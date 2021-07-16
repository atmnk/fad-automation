export default class RazorpayScreen{
    protected async typeAfterClicking(locator,value){
        let el = await driver.$(locator);
        await el.click();
        await el.setValue(value);
    }
    static predicateString(locator:string):string{
        return '-ios predicate string:'+locator
    }
    static classChain(locator:string):string{
        return '-ios class chain:'+locator
    }
}