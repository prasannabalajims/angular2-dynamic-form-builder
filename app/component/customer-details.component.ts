import {Component} from '@angular/core'
import {FormGroup, FormControl, Validators, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'
import {CustomerDetailsModel} from '../model/customer-details.model'
import {CUSTOMER_FORM_META, CUSTOMER_META} from '../resource/customer-details.schema'
import {FormGroupBuilder} from '../util/formgroupbuilder'
import {BaseModel} from '../model/base-model'
import {CustomerContactModel} from '../model/customer-contact.model'
import {ModelFactory} from '../util/modelFactory'

@Component({
    selector: 'customer-details',
    templateUrl: 'app/template/customer-details.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CustomerDetailsComponent {

    customerDetailsForm: FormGroup
    templateData: any

    constructor() {
        this.customerDetailsForm = new FormGroup({});
        for (let subFormGroup of CUSTOMER_META) {
            let model: BaseModel = ModelFactory.instantiateModel(subFormGroup['modelName'])
            FormGroupBuilder.buildFormGroup(subFormGroup,
                this.customerDetailsForm, model);
        }
        this.instantiateFormTemplate()
    }

    instantiateFormTemplate() {
        this.templateData = CUSTOMER_META
        // this.templateData['colSplit'] = ((CUSTOMER_META['templateMeta']['panelCount'] % 3 == 0) ?
        //     'col-sm-4' : ((CUSTOMER_META['templateMeta']['panelCount'] % 3 == 1) ? 'col-sm-6' : 'col-sm-4'))
    }

    onSubmitCustomerDetails(event) {
        console.log(this.customerDetailsForm)
    }
}