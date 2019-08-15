import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  post: Post;
  updatePost: Post;
  id: number;
  updatePostForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  get title() {
    return this.updatePostForm.get('title');
  }

  get author() {
    return this.updatePostForm.get('author');
  }

  get description() {
    return this.updatePostForm.get('description');
  }


  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postService.getPostById(this.id).subscribe(data => this.post = data);

    this.updatePostForm = this.fb.group({
      title: ['', [Validators.required,
        Validators.minLength(4)]],
      author: ['', [Validators.required,
        Validators.minLength(4)]],
      description: ['', [Validators.required,
        Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.updatePost = this.updatePostForm.value;
    console.log(this.updatePost);
    this.postService.updatePost(this.updatePost, this.id).subscribe(
      data => this.router.navigate([''])
    );
  }
}
