import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.model';

// We can use prefix for all our components.
@Component({
    selector: 'app-customer-summary',
    templateUrl: './customer-summary.component.html'
})
export class CustomerSummaryComponent {
    @Input() customer: Customer;
}
