import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';


import { HomeComponent } from './home/home.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormBuyComponent } from './form-buy/form-buy.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignsComponent,
    ContactusComponent,
    PageNotFoundComponent,
    FormBuyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // ScrollToModule.forRoot(routes),
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
