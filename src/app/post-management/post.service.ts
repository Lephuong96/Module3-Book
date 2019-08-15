import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_SERVER = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_SERVER}/books`);
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.API_SERVER}/books`, post);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API_SERVER}/books/${id}`);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.API_SERVER}/books/${id}`);
  }

  updatePost(post: Partial<Post>, id: number): Observable<Post> {
    return this.http.put<Post>(`${this.API_SERVER}/books/${id}`, post);
  }
}
