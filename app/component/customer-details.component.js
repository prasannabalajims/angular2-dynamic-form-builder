"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var customer_details_schema_1 = require('../resource/customer-details.schema');
var formgroupbuilder_1 = require('../util/formgroupbuilder');
var modelFactory_1 = require('../util/modelFactory');
var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent() {
        this.customerDetailsForm = new forms_1.FormGroup({});
        for (var _i = 0, CUSTOMER_META_1 = customer_details_schema_1.CUSTOMER_META; _i < CUSTOMER_META_1.length; _i++) {
            var subFormGroup = CUSTOMER_META_1[_i];
            var model = modelFactory_1.ModelFactory.instantiateModel(subFormGroup['modelName']);
            formgroupbuilder_1.FormGroupBuilder.buildFormGroup(subFormGroup, this.customerDetailsForm, model);
        }
        this.instantiateFormTemplate();
    }
    CustomerDetailsComponent.prototype.instantiateFormTemplate = function () {
        this.templateData = customer_details_schema_1.CUSTOMER_META;
    };
    CustomerDetailsComponent.prototype.onSubmitCustomerDetails = function (event) {
        console.log(this.customerDetailsForm);
    };
    CustomerDetailsComponent = __decorate([
        core_1.Component({
            selector: 'customer-details',
            templateUrl: 'app/template/customer-details.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());
exports.CustomerDetailsComponent = CustomerDetailsComponent;
//# sourceMappingURL=customer-details.component.js.map