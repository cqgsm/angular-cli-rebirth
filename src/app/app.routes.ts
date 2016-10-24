import { Routes, RouterModule } from '@angular/router';

import { ROUTER_CONFIG  as BLOG_ROUTER_CONFIG } from './blog-app/blog-app.routes';
import { ROUTER_CONFIG as MANAGE_ROUTER_CONFIG } from './manage-app/manage.routes';

export function loadBlogAppModule() {
  return System.import('./blog-app');
}
export function loadManageAppModule() {
  return System.import('./manage-app');
}

export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog/home' },
  ...BLOG_ROUTER_CONFIG,
  ...MANAGE_ROUTER_CONFIG
  // { path: 'blog', loadChildren: "./blog-app" },
  // { path: 'manage', loadChildren: "./manage-app" },
];

export const ROUTING = RouterModule.forRoot(ROUTER_CONFIG);
