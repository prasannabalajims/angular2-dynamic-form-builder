import {BaseModel} from './base-model'

export class CustomerDetailsModel extends BaseModel {
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
    customerAge: string;
    customerGender: string;
}