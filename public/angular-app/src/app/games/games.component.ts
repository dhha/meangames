import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
  games!: Game[];
  currentOffset: number = 0;
  limit: number = 5;
  limits: number[] = [5, 10, 20, 30];
  resultCount: number = 0;
  
  @Input()
  search!: string;

  constructor(private _gameService: GameDataService, private _activatedRoute: ActivatedRoute, private _route: Router){}

  ngOnInit(): void {
    if(this._activatedRoute.snapshot.queryParams["search"]) {
      this.search = this._activatedRoute.snapshot.queryParams["search"];
      this._search();
    } else {
      this._loadData();
    }
  }

  deleteOne(id: string) {
    if(confirm("Do you want to delete this game?")) {
      const index = this.games.findIndex(game => game._id == id);
      this._gameService.deleteOne(id).subscribe({
        next: () => {
          this.games.splice(index, 1);
          this._loadData();
        },
        error: (err) => {
          console.log(err);
        }
      });
    };
    
  }

  backPage(offset: number) {
    this.currentOffset = offset;
    this._loadData();
  }

  nextPage(offset: number) {
    this.currentOffset = offset;
    this._loadData();
  }

  onChange(selectedValue: any) {
    this.limit = parseInt(selectedValue.target.value);
    this.currentOffset = 0;
    console.log(selectedValue.target.value);
    this._loadData();
  }

  private _loadData() {
    this._gameService.getAll(this.currentOffset, this.limit).subscribe({
      next: (games) => {
        this.games = games;
        this.resultCount = this.games.length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public onSearch() {
    // console.log("Search", this.search);
    this._route.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: {search: this.search}, 
      queryParamsHandling: 'merge'
    });

    this._search();
  }

  private _search() {
    this._gameService.search(this.search).subscribe({
      next: (games) => {
        this.games = games;
        this.resultCount = this.games.length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
