import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
   @Input() value = 0;

  // UI-only: clicking changes internal value, not persisted
  set(v: number) {
    this.value = v;
  }
}
