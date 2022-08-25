import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';



const routes: Routes = [
  { path: "home", component: LoginComponent },
  { path: "user", component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: "forbidden", component: ForbiddenComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
