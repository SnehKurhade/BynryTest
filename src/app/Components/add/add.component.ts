import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
constructor(private posts:PostsService){}
addPost  = new FormGroup({
  author : new FormControl (''),
  title : new FormControl ('')}
)
isSuccess : boolean = false;
ngOnInit() : void{

}
SaveData() {
 // console.log(this.addPost.value);

  this.posts.savePost(this.addPost.value).subscribe((result) =>
  {
    console.log(result);
  });
  this.isSuccess = true;
  this.addPost.reset({});
}
closeAlert() {
  this.isSuccess = false;
}
}
