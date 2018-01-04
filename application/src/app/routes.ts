import {Routes}              from '@angular/router';
import {FormsDemoComponent}  from '@ng-ui-libraries/forms';
import {PromptDemoComponent} from './Component/PromptDemoComponent';
import {IndexPageComponent}  from './Pages/IndexPageComponent';


export const routes: Routes = [
    {
        path     : 'prompt',
        component: PromptDemoComponent
    },
    {
        path: 'forms',
        component: FormsDemoComponent
    },
    {
        path     : '',
        component: IndexPageComponent
    }
];
