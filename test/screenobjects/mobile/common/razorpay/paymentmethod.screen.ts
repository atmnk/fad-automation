import IOTPScreen from "./otp.screen";

export default interface IPaymentMethodScreen {
   selectCardAsPaymentMethod():Promise<IOTPScreen>;
}