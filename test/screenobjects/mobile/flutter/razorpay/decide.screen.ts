import HomeScreen from "../app/home.screen";

export default interface IDecidePaymentStatusScreen {
    makeSuccessful():Promise<HomeScreen>;
}