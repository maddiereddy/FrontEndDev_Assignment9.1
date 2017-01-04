import { Component } from '@angular/core';
import {SimpleService} from "../simple.service";

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['../app.component.css']
})
export class HeaderComponent {
    private title: string = 'This is the Header'
}

