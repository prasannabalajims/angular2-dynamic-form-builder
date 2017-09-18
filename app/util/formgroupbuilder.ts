import {FormGroup, FormControl, Validators} from '@angular/forms'
import {BaseModel} from '../model/base-model'

export class FormGroupBuilder {

    //TODO for nested & sub properties

    static buildFormGroup(propertiesSchema: any, formGroup: FormGroup, model: BaseModel) {
        for (let property of propertiesSchema['properties']) {
            formGroup.addControl(property['key'], new FormControl(model[property['key']], Validators.required))
        }
    }

}