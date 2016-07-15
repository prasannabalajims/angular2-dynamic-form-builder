import {BaseModel} from '../model/base-model'
import {CustomerContactModel} from '../model/customer-contact.model'
import {CustomerDetailsModel} from '../model/customer-details.model'
import {CustomerAddressModel} from '../model/customer-address.model'

export class ModelFactory {

    static instantiateModel(modelName: string): BaseModel {
        if (modelName == 'customerDetails') {
            return new CustomerDetailsModel()
        } else if (modelName == 'customerContact') {
            return new CustomerContactModel()
        } else if (modelName == 'customerAddress') {
            return new CustomerAddressModel()
        }
    }
}