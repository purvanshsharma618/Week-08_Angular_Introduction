import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-root',
  standalone: true,  // Angular 19+ Standalone Component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule]  // Import FormsModule
})
export class AppComponent {
  title: string = 'Bridgelabz';
  url: string = "https://www.bridgelabz.com";
  userName: string = '';  // For dynamic user input

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(event: Event): void {
    console.log("Saved button is clicked!", event);
    window.open(this.url, "_blank");
  }
}
