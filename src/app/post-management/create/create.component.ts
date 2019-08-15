import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createPostForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder, private router: Router) {
  }

  get title() {
    return this.createPostForm.get('title');
  }

  get author() {
    return this.createPostForm.get('author');
  }
  get description() {
    return this.createPostForm.get('description');
  }


  ngOnInit() {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required,
        Validators.minLength(4)]],
      author: ['', [Validators.required,
        Validators.minLength(4)]],
      description: ['', [Validators.required,
        Validators.minLength(4)]]

    });
  }

  onSubmit() {
    const post = this.createPostForm.value;
    console.log(post);
    this.postService.createPost(post).subscribe(
      data => this.router.navigate([''])
    );
  }

}
