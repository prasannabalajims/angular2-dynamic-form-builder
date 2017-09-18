import {BaseModel} from './base-model'

export class CustomerAddressModel extends BaseModel {
    houseNo: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
}