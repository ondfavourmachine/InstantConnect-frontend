import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/posts/post.service';

@Component({
  selector: 'app-postsform',
  templateUrl: './postsform.component.html',
  styleUrls: ['./postsform.component.css']
})
export class PostsformComponent implements OnInit {
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PostService) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    });
  }

  submitForm(posts) {
    const postBtn = document.getElementById('postBtn') as HTMLButtonElement;
    postBtn.disabled = true;
    this.ps.addPost(posts).subscribe(
      val => {
        console.log(val);
        postBtn.disabled = false;
      },
      err => {
        console.log(err);
        postBtn.disabled = false;
      }
    );
    this.postForm.reset();
  }

  get postBtn(): HTMLButtonElement {
    return document.getElementById('postBtn') as HTMLButtonElement;
  }
}
