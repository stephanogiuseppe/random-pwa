import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly title = 'random-pwa';
  public update: boolean = false;
  public joke: string;

  constructor(
    private swUpdate: SwUpdate,
    private dataService: DataService
  ) {
    swUpdate.available.subscribe((event) => {
      // this.update = true;
      swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    })
  }

  public ngOnInit(): void {
    this.dataService.getRandomJoke().subscribe((jokeRes) => {
      this.joke = jokeRes;
    });
  }
}
