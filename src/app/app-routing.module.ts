import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent} from './components/dashboard/dashboard/dashboard.component'
import { DisplaynoteComponent} from './components/displaynote/displaynote.component'
import { NoteComponent} from './components/note/note.component'



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'displaynote', component : DisplaynoteComponent},
  {
    path: 'dashboard', component: DashboardComponent,

  

    children: [

      {
        path: '', redirectTo: 'note', pathMatch: 'full'
      },

      { path: 'note', component: NoteComponent }
    ]

  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
