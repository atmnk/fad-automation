import ICardDetailsScreen from "./carddetails.screen";

export default interface IPaymentMethodScreen {
   selectCardAsPaymentMethod():Promise<ICardDetailsScreen>;
}