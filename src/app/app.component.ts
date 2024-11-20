import { Component, signal } from '@angular/core';
import { HeadaerComponent } from './headaer/headaer.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeadaerComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {



}
