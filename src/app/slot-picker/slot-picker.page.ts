import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slot-picker',
  templateUrl: './slot-picker.page.html',
  styleUrls: ['./slot-picker.page.scss'],
})
export class SlotPickerPage implements OnInit {
  team: number
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.team = parseInt(this.route.snapshot.paramMap.get('team'));
  }

}
