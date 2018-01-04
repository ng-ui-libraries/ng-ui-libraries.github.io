import {Component, NgModule}  from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {CommonModule}         from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {FormsDemoModule}      from '@ng-ui-libraries/forms';
import {PromptModule}         from '@ng-ui-libraries/prompt';
import {PromptDemoComponent}  from './Component/PromptDemoComponent';
import {IndexPageComponent}   from './Pages/IndexPageComponent';
import {routes}               from './routes';

@Component({
    selector: 'app',
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" routerLink="">
                    <img class="angular-logo" src="assets/angular.png"/>
                    ng-ui-libraries
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a routerLink="prompt" class="nav-link" [routerLinkActive]="['active']">
                                Prompt
                            </a>
                        </li>
                        <li class="nav-item">
                            <a routerLink="forms" class="nav-link" [routerLinkActive]="['active']">
                                Forms
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles  : [
            `
            .angular-logo {
                max-height: 45px;
            }
        `
    ]
})
export class AppComponent {

    constructor(public router: Router) {

    }
}

@NgModule({
    declarations: [
        AppComponent,
        IndexPageComponent,
        PromptDemoComponent
    ],
    imports     : [
        BrowserModule,
        CommonModule,
        PromptModule,
        RouterModule.forRoot(routes),
        FormsDemoModule
    ],
    exports     : [
        AppComponent
    ],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
