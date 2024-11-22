import { Routes } from '@angular/router';
import { CAT_FACTS, LOGIN } from './utils/const';

export const routes: Routes = [
    { path: '', redirectTo: LOGIN, pathMatch: 'full' },
    {
        path: LOGIN,
    },
    {
        path: CAT_FACTS,
    },
];
