import { Component, Input } from '@angular/core';
import { IContract } from "app/models/contract.model";

@Component({
    selector: 'app-customer-contracts',
    templateUrl: './customer-contracts.component.html',
    styleUrls: ['./customer-contracts.component.css']
})
export class CustomerContractsComponent {
    @Input() contracts: IContract[];
    @Input() userName: string;
}