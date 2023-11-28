import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';

export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'bye', component: ByeComponent },
];
