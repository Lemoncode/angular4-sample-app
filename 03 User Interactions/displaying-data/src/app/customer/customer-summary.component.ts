import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer.model';
// We can use prefix for all our components.
@Component({
    selector: 'app-customer-summary',
    templateUrl: './customer-summary.component.html'
})
export class CustomerSummaryComponent {
    @Input() customer: Customer;
    @Output() customerChange:EventEmitter<number> = new EventEmitter<number>();

    selectCustomer(customerIdElement: HTMLLIElement) {
        this.customerChange.emit(+customerIdElement.value);
    }
}
