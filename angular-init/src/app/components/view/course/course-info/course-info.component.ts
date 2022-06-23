import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  id!:number;
  constructor(private rotaActive: ActivatedRoute) { }

  ngOnInit(): void {
    // Solução do professor DIO para pegar o parametro via id setado no routing
    this.id = Number( this.rotaActive.snapshot.paramMap.get('id') );


    //Realizado na mão
    // this.rotaActive.params.subscribe((paramentroRecebido) => {
    //   this.id = Number( paramentroRecebido )
    // } );


  }

}
