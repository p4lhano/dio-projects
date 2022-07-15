import { Component, OnInit } from '@angular/core';
import { RickAndMortyService,Personage,Retorno } from 'src/app/services/rick-and-morty.service';


@Component({
  selector: 'app-list-personage',
  templateUrl: './list-personage.component.html',
  styleUrls: ['./list-personage.component.css']
})
export class ListPersonageComponent implements OnInit {

  personagens: Personage[] = [];

  constructor(private serviceRick: RickAndMortyService) { }

  ngOnInit(): void {
    this.serviceRick.getPersonages().subscribe({
      next: result => {
        this.personagens = result.results;
      },
      error: err => console.log(err)      
    });
  }

}
