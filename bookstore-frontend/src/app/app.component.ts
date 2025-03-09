import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure it's a standalone component
  imports: [RouterOutlet, HttpClientModule], // Add HttpClientModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fix: should be 'styleUrls' instead of 'styleUrl'
})
export class AppComponent {
  title = 'bookstore-frontend';
}
