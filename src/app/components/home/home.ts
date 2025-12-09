import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Feed } from '../feed/feed';
import { Sidebar } from '../sidebar/sidebar';
import { CreatePost } from '../create-post/create-post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Feed, Sidebar, CreatePost, ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
