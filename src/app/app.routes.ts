import { Routes } from '@angular/router';
import { Home } from './Componets/home/home';
import { ProductComponent } from './Componets/product-component/product-component';
// import { SignIn } from './Componets/sign-in/sign-in';
import { Notfound } from './Componets/notfound/notfound';
import { Aboutus } from './Componets/aboutus/aboutus';
import { MainComponent } from './Componets/main-component/main-component';
import { ProductDetails } from './Componets/product-details/product-details';
import { SignUpTemplatedrivien } from './Componets/sign-up-templatedrivien/sign-up-templatedrivien';
import { ReactiveFormProducts } from './Componets/reactive-form-products/reactive-form-products';
import { User } from './Componets/user/user';
import { loginGuard } from './guards/login-guard';
import { adminGuardGuard } from './guards/admin-guard-guard';
import { UpdatedComponent } from './Componets/updated-component/updated-component';
import { DeleteComponnent } from './Componets/delete-componnent/delete-componnent';
// make the app routes
export const routes: Routes = [
    // all my routes
    // constant part http://localhost:4200/
    // make sure the default path is the first one and not found is the last one

    {path:'', component:MainComponent, children:[
    {path:'', redirectTo:'/home', pathMatch:'full'}, // default route
    {path:'home', component:Home, title:'Home page'},
    {path:'products', component:ProductComponent,title:'Product page',canActivate:[loginGuard]},
    // step-1:dynamic route
    {path:'product_component/:prductID', component: ProductDetails, title: "product details page"},
    {path:'aboutus', component:Aboutus, title:"About Us page"},
    {path:'signUp', component:SignUpTemplatedrivien, title:'Sign Up Page'},
    {path:'admin/signup', component:User, title:'add new user'},
    {path:'insertproduct', component:ReactiveFormProducts, title:'Add Product Page',canActivate:[adminGuardGuard]},
    {path:'updateproduct', component:UpdatedComponent, title:'Add Product Page',canActivate:[adminGuardGuard]},
    {path:'deleteproduct', component:DeleteComponnent, title:'Add Product Page',canActivate:[adminGuardGuard]}
    ]},
    // {path:'Login', component:SignIn, title:'Login Page'},
    {path:'**', component:Notfound} // wild card routes
];
