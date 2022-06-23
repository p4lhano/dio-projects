import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/view/course/course-list/course-list.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { Erro404Component } from './components/template/erro404/erro404.component';
import { CourseInfoComponent } from './components/view/course/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ReplacePipe,
    NavBarComponent,
    Erro404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'cursos',
        pathMatch: 'full'
      },{
        path: 'cursos',
        component: CourseListComponent
      },{
        path: 'cursos/info/:id',
        component: CourseInfoComponent
      },{
        path: '**',
        component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
