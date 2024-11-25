// Import Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { AppRoutingModule } from './app-routing.module';  

// Creación de modulo
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//Exportar
export class AppModule {}
