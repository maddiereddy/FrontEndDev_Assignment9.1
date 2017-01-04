import { Component } from '@angular/core';
import { SimpleService } from "../simple.service";

@Component({
    selector: 'my-home',
    providers: [SimpleService],
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
})
export class HomeComponent {
    private title: string = 'This is the Home Component'
    private name: string

    constructor(simpleService: SimpleService){
        this.name = simpleService.getName()

    }
}