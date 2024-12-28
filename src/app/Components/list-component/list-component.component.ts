import { Component } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
   postsData: any = [];
constructor(private posts : PostsService){}
ngOnInit(): void{
this.posts.getAllPosts().subscribe((Data)=>{
  console.log(Data);
this.postsData = Data;
});
}

delete(id : number) {
this.posts.deletePost(id).subscribe((result)=>{
  console.log(result);
});
this.ngOnInit();
}

}
