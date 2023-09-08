import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'hamburger',
        loadChildren: () => import('./pages/hamburger/hamburger.module').then(m => m.HamburgerPageModule)
    },

    {
        path: 'hotdog',
        loadChildren: () => import('./pages/hotdog/hotdog.module').then(m => m.HotdogPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
    },
    {
        path: 'pizza',
        loadChildren: () => import('./pages/pizza/pizza.module').then(m => m.PizzaPageModule)
    },

    {
        path: 'montagem',
        loadChildren: () => import('./pages/montagem/montagem.module').then(m => m.MontagemPageModule)
    },

    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminPageModule)
    },
    {
        path: 'cadastrar',
        loadChildren: () => import('./pages/cadastrar/cadastrar.module').then(m => m.CadastrarPageModule)
    },
    {
        path: 'recuperar-senha',
        loadChildren: () => import('./pages/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
    },
    {
        path: 'registrar',
        loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarPageModule)
    },
    {
        path: 'loader',
        loadChildren: () => import('./loader/loader.module').then(m => m.LoaderPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
    },  {
    path: 'add-ingrediente',
    loadChildren: () => import('./pages/add-ingrediente/add-ingrediente.module').then( m => m.AddIngredientePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },


];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
