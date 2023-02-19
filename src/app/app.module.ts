import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConverterSelectionComponent } from './converter-selection/converter-selection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConverterCalculationComponent } from './converter-calculation/converter-calculation.component';
import { LinearConvertPipe } from './linearConvert.pipe';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';
import { AboutScreenComponent } from './about-screen/about-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConverterSelectionComponent,
    ConverterCalculationComponent,
    LinearConvertPipe,
    ConverterComponent,
    AboutScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
