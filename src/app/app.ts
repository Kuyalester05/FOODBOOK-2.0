import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Header } from "./components/header/header";
import { Landing } from "./components/landing/landing";
import { Footer } from "./components/footer/footer";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing, Footer, MatIcon, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
