import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import("./auth-module/auth-module.module").then(m => m.AuthModuleModule) },
  { path: 'employee', loadChildren: () => import("./employee-module/employee-module.module").then(m => m.EmployeeModuleModule) },
  { path: '**', redirectTo: 'employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
