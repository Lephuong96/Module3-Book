import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [CreateComponent, PostComponent, UpdateComponent, DeleteComponent, ShowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PostManagementModule { }
