import IPaymentMethodScreen from "./paymentmethod.screen";

export default interface ICustomerScreen{
    addDetails(mobile:string,email:string):Promise<IPaymentMethodScreen>{
}