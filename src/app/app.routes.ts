import { UIRouterModule, Ng2StateDeclaration  } from '@uirouter/angular';

const routes = [
    {
        name: 'lazy.**',
        url: '/lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
    }
];

export const appRoutes = UIRouterModule.forRoot({
    states: routes,
    useHash: false
});
