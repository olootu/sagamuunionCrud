import { Component, OnInit } from '@angular/core';
import {Member, Post} from '../../../models/members.model';
import {MembersService} from '../../../core/members.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  member: Member = new Member('', '', null, '', null);
  membersList: Member[];
  private postsSub: Subscription;
  mode = 'create';
  postId: string;
  memberId: Member;
  imagePreview: any;
  rForm: FormGroup;
  totalPost = 10;
  noOfPostPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  defaultImgUrl = '../../../assets//default.jpeg'



    constructor(private bsService: MembersService,
       public route: ActivatedRoute,
       private fb: FormBuilder
       ) { }

    ngOnInit() {
      this.rForm = this.fb.group({
        name: [''],
        email: [''],
        telephone: [''],
        imagePath: ['']
      });


         this.bsService.getPosts();
          this.postsSub = this.bsService.getPostUpdatedListener()
          .subscribe((res: Member[]) => {
            this.membersList = res;
           console.log(this.membersList)
          });

          this.route.paramMap.subscribe((paramMap: ParamMap) =>{
            if (paramMap.has('postId')) {
              this.mode = 'edit';
              this.postId = paramMap.get('postId');
              this.memberId = this.bsService.getPostId(this.postId);
              this.rForm.patchValue({
                name: this.memberId.name,
                email: this.memberId.email,
                telephone: this.memberId.telephone,
                imagePath: this.memberId.imagePath
              })
            } else {
              this.mode = 'create';
              this.postId = null;
            }
          });
    }
   ngOnDestroy() {
     this.postsSub.unsubscribe();
   }
    addMember() {
      const posts: Member = {
        id: '',
        name: this.rForm.get('name').value,
        email: this.rForm.get('email').value,
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

    signIn(form: NgForm) {
      // ddd
    }

    onDelete(id) {

      this.bsService.deletePost(id);
    }

    onEdit(id: string) {
      console.log('Edit begins', id);
    }

    onImagePicked(event: Event){
      const file = (event.target as HTMLInputElement).files[0];
      this.rForm.patchValue({image: file});
      this.rForm.get('image').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
          this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
      console.log(file);
    }

    onPagination(event: PageEvent) {
      console.log(event);
    }

}
