import {Component} from '@angular/core'
import {CustomerDetailsComponent} from './customer-details.component'

@Component({
    selector: 'dynamic-form-app',
    template: `
        <customer-details></customer-details>
    `,
    directives: [CustomerDetailsComponent]
})
export class AppComponent {

}