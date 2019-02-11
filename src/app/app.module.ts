import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
//import 'hammerjs';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatRippleModule,
        RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full'},
        { path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
        { path: 'contact', component: ContactComponent, pathMatch: 'full'},

        ]),  
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
