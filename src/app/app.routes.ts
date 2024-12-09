import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { Pages } from './core/pages';
import { BlogComponent } from './blog/blog.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {path: Pages.home, component: HomepageComponent},
    {path: Pages.about, component: AboutComponent },
    {path: Pages.packages, component: PackagesComponent},
    {path: Pages.contact, component:ContactComponent},
    {path: Pages.blog, component: BlogComponent},
    {path: Pages.terms, component: TermsComponent},
    {path: Pages.privacy, component: PrivacyComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];
