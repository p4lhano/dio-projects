import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  id!:number; //não inicializar
  name?: string ;
  course!: Course ;

  constructor(private rotaActive: ActivatedRoute, private service: CourseService) { }

  ngOnInit(): void {
    // Solução do professor DIO para pegar o parametro via id setado no routing
    // this.course.id = Number( this.rotaActive.snapshot.paramMap.get('id') );
    // console.log( Number( this.rotaActive.snapshot.paramMap.get('id') ) );

    //Realizado na mão
    // this.rotaActive.params.subscribe((paramentroRecebido) => {
    //   this.id = Number( paramentroRecebido )
    // } );
    const x = this.service.findCourseByIdSync( Number( this.rotaActive.snapshot.paramMap.get('id') ) );
    if ( !x ){
      throw new TypeError(`Não encontrato ID informado: ${ this.rotaActive.snapshot.paramMap.get('id') }`);
    } else {
      this.course = x;
    }


  }

}
