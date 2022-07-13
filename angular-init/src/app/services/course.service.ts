import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private BASE_URL: string = "http://localhost:3100/api" + "/courses";

  constructor(private httpClient: HttpClient) { }

  listAllCoursesAsync(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.BASE_URL);
    // return COURSERS_TEST ;
  }

  findCourseByIdSync(id: number): Course | undefined {
    return COURSERS_TEST.find( (c : Course) => c.id === id );
  }

  findCourseByIdAsync(id: number): Observable<Course> | undefined {
    return this.httpClient.get<Course>(this.BASE_URL + `/${id}`);
  }

  saveCourseAsync(course: Course) {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.BASE_URL}/${course.id}`,course);
    }
    return this.httpClient.post<Course>(`${this.BASE_URL}`,course);
  }

  deleteByIdAsync(id: Number): Observable<any>{
    return this.httpClient.delete<any>(`${this.BASE_URL}/${id}`);
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
