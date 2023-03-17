  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms'; 
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { ReactiveFormsModule } from '@angular/forms';
  import { LoginComponent } from './login/login.component';
  import { HttpClientModule } from '@angular/common/http';
  import { NgToastModule } from 'ng-angular-popup';
  import { ToastManager } from './login/toastManager.service';
  import { UserDataComponent } from './user/user-data/user-data.component';
  import { MatTableModule } from '@angular/material/table';

  import { MatCommonModule } from '@angular/material/core';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { MatIconModule } from '@angular/material/icon';
  import { MatSelectModule } from '@angular/material/select';

  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      UserDataComponent
      
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule, 
      NgToastModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatSelectModule,
      BrowserAnimationsModule,
      MatCommonModule,
      
      
      
    ],
    providers: [ToastManager],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
