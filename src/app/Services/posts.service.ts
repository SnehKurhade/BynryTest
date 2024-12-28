import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }

  getAllPosts() { 
    return this.http.get(this.url);
  }
  savePost(data:any):Observable<any> { 
    return this.http.post(this.url,data);
  }
  deletePost(postId:any){
    return this.http.delete(`${this.url}/${postId}`);
  }
  getPostById(postId:any){
    return this.http.get(`${this.url}/${postId}`);
  }
  updatePost(postId:any, data:any){
    return this.http.put(`${this.url}/${postId}`,data);
  }
}
