import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { ImgComponent } from './components/img/img.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    FundamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
