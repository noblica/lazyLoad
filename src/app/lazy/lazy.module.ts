import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

import { lazyRoutes } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
    lazyRoutes
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
