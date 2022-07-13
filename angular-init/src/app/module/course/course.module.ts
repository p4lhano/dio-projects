import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from 'src/app/components/view/course/course-list/course-list.component';
import { CourseInfoComponent } from 'src/app/components/view/course/course-info/course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'cursos',
        component: CourseListComponent
      },{
        path: 'cursos/info/:id',
        component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule { }
