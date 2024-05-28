import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'netrecrute';
  user = {
    name: 'John Doe',
    age: 30
  };
  currentDate = new Date();
  getWelcomeMessage() {
    return 'Welcome to the Angular tutorial!';
  }
}
