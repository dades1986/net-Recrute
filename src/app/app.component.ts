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
  };
  //Component Property
  imageUrlLogoNetRecrute: string = 'https://static.wixstatic.com/media/4cd9a7_2ef41cb15d5b4a5b9f69fe091d090fb3~mv2.png/v1/fill/w_72,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/smartvector_layers_collection_0005_ICON-color.png';
  imageUrlLogoNetRecrute2: string = 'assets/images/image.png';
}
