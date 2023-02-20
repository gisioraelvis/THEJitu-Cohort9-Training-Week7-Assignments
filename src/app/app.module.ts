import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignupTemplateDrivenFormComponent } from './signup-template-driven-form/signup-template-driven-form.component';

@NgModule({
  declarations: [AppComponent, TemplateDrivenFormComponent, SignupTemplateDrivenFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
