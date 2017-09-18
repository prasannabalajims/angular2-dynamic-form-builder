"use strict";
var forms_1 = require('@angular/forms');
var FormGroupBuilder = (function () {
    function FormGroupBuilder() {
    }
    //TODO for nested & sub properties
    FormGroupBuilder.buildFormGroup = function (propertiesSchema, formGroup, model) {
        for (var _i = 0, _a = propertiesSchema['properties']; _i < _a.length; _i++) {
            var property = _a[_i];
            formGroup.addControl(property['key'], new forms_1.FormControl(model[property['key']], forms_1.Validators.required));
        }
    };
    return FormGroupBuilder;
}());
exports.FormGroupBuilder = FormGroupBuilder;
//# sourceMappingURL=formgroupbuilder.js.map