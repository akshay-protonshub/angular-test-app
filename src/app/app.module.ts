import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent, DialogOverviewExampleDialog } from './main/main.component';
import { PopComponent } from './pop/pop.component';

import { MatInputModule,  MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";

import { ServiceService} from './services/service.service';
import { HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe} from './filter/pipe/filter.pipe'
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';  
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';









@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PopComponent,
    FilterPipe,
    DialogOverviewExampleDialog
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    
    
    



  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogOverviewExampleDialog
  ]
})
export class AppModule { }
