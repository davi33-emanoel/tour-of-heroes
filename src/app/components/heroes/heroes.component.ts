/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
     this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`X-men selecionado com sucesso com id : ${hero.id}`)

  }
}
