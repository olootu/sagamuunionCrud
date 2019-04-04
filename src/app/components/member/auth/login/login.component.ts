import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Member } from 'src/app/models/members.model';
import { MembersService } from './../../../../core/members.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  mode = 'create';
  postId: string;
  memberId: Member;
  imagePreview: any;


  constructor(
    private bsService: MembersService,
       private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.rForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      telephone: [''],
      imagePath: ['']
    });
  }

  signIn(form: NgForm) {
   console.log(form.value);
  }

  addMember() {
    const posts: Member = {
      id: '',
      name: this.rForm.get('name').value,
      email: this.rForm.get('email').value,
      password: this.rForm.get('password').value,
      telephone: this.rForm.get('telephone').value,
      imagePath: this.rForm.get('imagePath').value

    };
    if(this.mode === 'create') {
      this.bsService.addMemberPosts(posts);
    } else {
      this.bsService.updateMemberPosts(this.postId, posts);
    }
    console.log('this.rForm.value', this.rForm.value);

    this.rForm.reset();
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.rForm.patchValue({imagePath: file});
    this.rForm.get('imagePath').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
        this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
    console.log(file);
  }

}
