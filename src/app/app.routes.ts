import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const hasUserObj = user && typeof user === 'object' && Object.keys(user).length > 0;
    // return hasUserObj && !!localStorage.getItem('token');
    return true;
}

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        matcher: url => {
            if (isLoggedIn()) {
                return url.length ? { consumed: [] } : { consumed: url };
            }
            return null
        },
        loadChildren: () => import('./pages/page.routes').then(m => m.PAGE_ROUTES)

    },
    {
        matcher: url => {
            if (!isLoggedIn()) {
                return url.length ? { consumed: [] } : { consumed: url };
            }
            return null
        },
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
