import { Component } from '@angular/core';

@Component({
    selector: 'my-contain',
    templateUrl: './contain.component.html',
    styleUrls: ['../app.component.css']
})
export class ContainComponent {
    private title: string = 'This is the Body'
}

