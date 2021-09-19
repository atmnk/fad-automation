import IDecidePaymentStatusScreen from "./decide.screen";

export default interface ICardDetailsScreen {
    pay(card:string,expiry:string,name:string,cvv:string):Promise<IDecidePaymentStatusScreen>
}