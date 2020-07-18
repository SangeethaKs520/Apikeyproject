import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import {DataTableModule} from "@vrushalisoft/datatable";
import { AddServiceComponent } from './service/add-service/add-service.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    HeaderComponent,

    LoginComponent,

    ServiceComponent,

    AddServiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    DataTableModule,
    CommonModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],


  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
