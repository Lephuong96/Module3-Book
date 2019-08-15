import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../post';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  post: Post;
  id: number;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postService.getPostById(this.id).subscribe(data => this.post = data);
  }
  delete(id: number) {
    this.postService.deletePost(this.id).subscribe(
      data => this.router.navigate([''])
    );
  }
}
