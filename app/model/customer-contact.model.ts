import {BaseModel} from './base-model'

export class CustomerContactModel extends BaseModel {
    emailId: string;
    mobileNo: string;
    landlineNo: string;
    facebookProfileUrl: string;
}