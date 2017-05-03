import { Component } from '@angular/core';
import {PostService} from '../service/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  {
  name: string;
  email: string;
  adr: address;
  hobbies: string[];
  showHobbies: Boolean;
  posts: Post[];

  constructor(private postService: PostService) {
    console.log("UserComponent ran");
    this.name = "Blaszaku!";
    this.email = "kblaszke@plusnet.pl";
    this.adr = {
      street: "Kołłątaja 41/22",
      city: "Puławy",
      zipcode: "24-100"
      };
    this.hobbies = ['Movies', 'Music', 'Sport'];
    this.showHobbies = false;
    this.postService.getPost().subscribe(post => {
        this.posts = post;
    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }  

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: string;
  city: string;
  zipcode: string;
}

interface Post  {
  id: number;
  title: string;
  body: string;
}
