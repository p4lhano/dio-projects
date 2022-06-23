import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  // selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  listCourser: Course[] = [];
  filtradeCourser: Course[] = [];
  _filterBy:string = '';

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.listCourser = this.service.listAllCoursesSync();
    this.filtradeCourser = this.listCourser;
  }

  set filter(value:string) {
    this._filterBy = value;

    this.filtradeCourser = this.listCourser.filter((c: Course) => c.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1 );

  }

  get filter(){
    return this._filterBy;
  }

}
