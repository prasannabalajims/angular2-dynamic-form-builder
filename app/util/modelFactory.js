"use strict";
var customer_contact_model_1 = require('../model/customer-contact.model');
var customer_details_model_1 = require('../model/customer-details.model');
var customer_address_model_1 = require('../model/customer-address.model');
var ModelFactory = (function () {
    function ModelFactory() {
    }
    ModelFactory.instantiateModel = function (modelName) {
        if (modelName == 'customerDetails') {
            return new customer_details_model_1.CustomerDetailsModel();
        }
        else if (modelName == 'customerContact') {
            return new customer_contact_model_1.CustomerContactModel();
        }
        else if (modelName == 'customerAddress') {
            return new customer_address_model_1.CustomerAddressModel();
        }
    };
    return ModelFactory;
}());
exports.ModelFactory = ModelFactory;
//# sourceMappingURL=modelFactory.js.map