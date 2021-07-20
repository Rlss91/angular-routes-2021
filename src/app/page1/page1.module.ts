import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1-routing.module';

@NgModule({
  imports: [CommonModule, Page1RoutingModule],
  declarations: [Page1Component],
})
export class Page1Module {}
