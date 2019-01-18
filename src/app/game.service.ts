import { Injectable } from '@angular/core';
import uuidv1 from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  uuid: string
  team: number
  slot: number
  
  constructor() { 
    this.uuid = uuidv1()
    console.log(this.uuid)
  }
}
