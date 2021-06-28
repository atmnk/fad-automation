import ICardDetailsScreen from "./carddetails.screen";

export default interface IOTPScreen {
    skipSaveCard():Promise<ICardDetailsScreen>;
}