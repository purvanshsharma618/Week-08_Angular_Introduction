import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,  // Angular 19+ Standalone Component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, CommonModule]  // Import FormsModule and CommonModule
})
export class AppComponent {
  title: string = 'Bridgelabz';
  url: string = "https://www.bridgelabz.com";
  userName: string = '';  // For dynamic user input
  errorMessage: string = '';  // For validation message

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(event: Event): void {
    console.log("Saved button is clicked!", event);
    window.open(this.url, "_blank");
  }

  validateUserName(): void {
    const pattern = /^[A-Z][a-zA-Z]{2,}$/;  // Starts with uppercase, at least 3 letters
    if (!pattern.test(this.userName)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 letters.";
    } else {
      this.errorMessage = '';
    }
  }
}
