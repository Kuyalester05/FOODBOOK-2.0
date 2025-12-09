import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostCard } from '../post-card/post-card';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostCard, ],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {

}
