import { Routes } from '@angular/router';
import { HoliComponent } from './holi/holi.component';
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
    { path: 'holi', component: HoliComponent },
    { path: 'components', component: ComponentsComponent },
];
