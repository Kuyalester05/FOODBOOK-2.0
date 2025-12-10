import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css'],
})
export class Landing {

}
