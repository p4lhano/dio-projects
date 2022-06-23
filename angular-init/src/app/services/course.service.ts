import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  listAllCoursesSync(): Course[] {
    return COURSERS_TEST ;
  }

}

const COURSERS_TEST: Course[] =  [
  {
    id: 1,
    name: "ADS",
    code: 1,
    durationInSemester: 5,
    price: 123
  },{
    id: 2,
    name: "MED",
    code: 2,
    durationInSemester: 10,
    price: 987
  },{
    id: 3,
    name: "Eng.Civil",
    code: 3,
    durationInSemester: 8,
    price: 564
  }
];
