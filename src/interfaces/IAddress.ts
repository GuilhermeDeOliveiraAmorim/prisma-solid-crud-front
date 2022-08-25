import ICity from "./ICity";
import ICountry from "./ICountry";
import IState from "./IState";

export default interface IAddress {
    id: string;
    street: string;
    street_number: number;
    zip_code: string;
    city: ICity;
    state: IState;
    country: ICountry;
}
