import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game = new Game("","",0);

  constructor(private _gameService: GameDataService, private _activatedRouter: ActivatedRoute, private _router: Router){}

  ngOnInit(): void {
    const gameId: string = this._activatedRouter.snapshot.params["id"];
    this._gameService.getOne(gameId).subscribe({
      next: (game) => {
        this.game = game;
      },
      error: (err) => {
        console.log(err);
      }
    })
  };

  deleteOne() {
    console.log("game", this.game);
    if(confirm("Do you want to delete this game?") && this.game) {
      this._gameService.deleteOne(this.game._id).subscribe({
        next: () => {
          if(confirm("Game deleted!")) {
            this._router.navigate(["games"]);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
