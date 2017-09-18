"use strict";
exports.CUSTOMER_FORM_META = {
    "properties": [
        {
            "key": "customerId",
            "type": "number",
            "inputType": "text",
            "description": "Customer ID",
            "maxLength": 10 //validation info
        },
        {
            "key": "customerFirstName",
            "type": "string",
            "inputType": "text",
            "description": "First Name"
        },
        {
            "key": "customerGender",
            "type": "string",
            "inputType": "select",
            "values": ["Male", "Female", "Cannot be disclosed"],
            "description": "Gender"
        },
        {
            "key": "customerAge",
            "type": "number",
            "inputType": "text",
            "description": "Customer Age"
        }
    ]
};
exports.CUSTOMER_CONTACT_META = {
    "properties": [
        {
            "key": "emailId",
            "type": "string",
            "inputType": "text",
            "description": "Customer Email ID"
        },
        {
            "key": "mobileNo",
            "type": "string",
            "inputType": "text",
            "description": "Mobile No"
        }
    ]
};
exports.CUSTOMER_META = [{
        "modelName": "customerDetails",
        "formHeading": "Customer Personal Information",
        "properties": [{
                "key": "customerId",
                "type": "number",
                "inputType": "text",
                "description": "Customer ID",
                "maxLength": 10
            }, {
                "key": "customerFirstName",
                "type": "string",
                "inputType": "text",
                "description": "First Name"
            }, {
                "key": "customerGender",
                "type": "string",
                "inputType": "select",
                "values": ["Male", "Female", "Cannot be disclosed"],
                "description": "Gender"
            }, {
                "key": "customerAge",
                "type": "number",
                "inputType": "text",
                "description": "Customer Age"
            }]
    }, {
        "modelName": "customerContact",
        "formHeading": "Customer Contact",
        "properties": [{
                "key": "emailId",
                "type": "string",
                "inputType": "text",
                "description": "Customer Email ID"
            }, {
                "key": "mobileNo",
                "type": "string",
                "inputType": "text",
                "description": "Mobile No"
            }]
    }, {
        "modelName": "customerAddress",
        "formHeading": "Customer Address",
        "properties": [{
                "key": "houseNo",
                "type": "string",
                "inputType": "text",
                "description": "House No"
            }, {
                "key": "streetName",
                "type": "string",
                "inputType": "text",
                "description": "Street Name"
            }, {
                "key": "city",
                "type": "string",
                "inputType": "text",
                "description": "City"
            }, {
                "key": "state",
                "type": "string",
                "inputType": "text",
                "description": "State"
            }, {
                "key": "country",
                "type": "string",
                "inputType": "select",
                "values": ["America", "Australia", "India", "France"],
                "description": "country"
            }, {
                "key": "pincode",
                "type": "number",
                "inputType": "text",
                "description": "Pincode"
            }]
    }];
//# sourceMappingURL=customer-details.schema.js.map