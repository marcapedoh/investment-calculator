import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { HeadaerComponent } from "./headaer/headaer.component";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
  declarations: [
    AppComponent,
    HeadaerComponent,
    InvestmentResultsComponent
  ],
  imports: [
    BrowserModule,
    UserInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
