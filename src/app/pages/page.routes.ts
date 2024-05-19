import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PagesComponent } from "./pages.component";
import { LoginComponent } from "./login/login.component";

export const PAGE_ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }
]