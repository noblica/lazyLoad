import { UIRouterModule } from '@uirouter/angular';

import { LazyComponent } from './lazy.component';

const states = [
    {
        parent: 'app',
        name: 'lazy',
        url: '/lazy',
        component: LazyComponent,
    }
];

export const lazyRoutes = UIRouterModule.forChild({states});