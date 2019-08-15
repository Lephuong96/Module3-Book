import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './post-management/post/post.component';
import {CreateComponent} from './post-management/create/create.component';
import {UpdateComponent} from './post-management/update/update.component';
import {DeleteComponent} from './post-management/delete/delete.component';

const routes: Routes = [
  {path: '', component: PostComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'delete/:id', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
