import { Component } from '@angular/core';

@Component({
    selector: 'my-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['../app.component.css']
})
export class FooterComponent {
    private title: string = 'This is the Footer'
}

