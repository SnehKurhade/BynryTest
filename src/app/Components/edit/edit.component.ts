import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private posts:PostsService, private routes:ActivatedRoute){}
  editPost  = new FormGroup({
    author : new FormControl (''),
    title : new FormControl ('')}
  )
isSuccess : boolean = false;
ngOnInit(){
  this.posts.getPostById(this.routes.snapshot.params[`id`]).subscribe((result:any) =>
    {
     this.editPost  = new FormGroup({
       author : new FormControl (result[`author`]),
       title : new FormControl (result[`title`])}
     ) 
     //console.log(result);
    });
}
EditData() {

    this.posts.updatePost(this.routes.snapshot.params[`id`],this.editPost.value).subscribe((result)=>
    {
      console.log(result);
    });
     this.isSuccess = true;
     this.editPost.reset({});
   }
   closeAlert() {
     this.isSuccess = false;
   }
}
