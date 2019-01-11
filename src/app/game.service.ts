import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  team: number
  slot: number
  
  constructor() { }
}
