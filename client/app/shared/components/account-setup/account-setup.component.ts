import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-account-setup',
    templateUrl: './account-setup.component.html',
    styleUrls: ['./account-setup.component.scss']
})

export class AccountSetupComponent {
    @Input()
    public data: any = {};

    constructor() {}
}