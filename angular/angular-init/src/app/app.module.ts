import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { Erro404Component } from './components/template/erro404/erro404.component';
import { CourseModule } from './module/course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    ReplacePipe,
    NavBarComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'cursos',
        pathMatch: 'full'
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
