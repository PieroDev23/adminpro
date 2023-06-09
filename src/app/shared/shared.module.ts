import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BreadcrumbComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbComponent, SidebarComponent, HeaderComponent],
})
export class SharedModule {}
