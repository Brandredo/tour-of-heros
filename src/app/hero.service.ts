import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// specifies that this service is available to all components as a singleton instance
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Heroes fetched');
    return heroes;
  }

}
