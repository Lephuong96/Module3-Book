import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './post-management/post/post.component';
import { CreateComponent } from './post-management/create/create.component';
import { UpdateComponent } from './post-management/update/update.component';
import { DeleteComponent } from './post-management/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
