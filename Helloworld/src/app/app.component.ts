import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bridgelabz';
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(event: Event): void {
    console.log("Saved button is clicked!", event);
    window.open(this.url, "_blank");
  }
}
