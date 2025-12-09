import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Rating } from '../rating/rating';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, Rating, ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {

}
