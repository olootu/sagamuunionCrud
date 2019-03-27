import { Component, OnInit } from '@angular/core';
import {Member, Post} from '../../models/members.model';
import {MembersService} from '../../core/members.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  member: Member = new Member('', '', null, '');
  membersList: Member[];
  private postsSub: Subscription;
  mode = 'create';
  postId: string;
  memberId: Member;
  rForm: FormGroup;



    constructor(private bsService: MembersService,
       public route: ActivatedRoute,
       private fb: FormBuilder
       ) { }

    ngOnInit() {
      this.rForm = this.fb.group({
        name: [''],
        email: [''],
        telephone: [''],
        image: ['']
      })


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
                telephone: this.memberId.telephone
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
        telephone: this.rForm.get('telephone').value
      };
      if(this.mode === 'create') {
        this.bsService.addMemberPosts(posts);
      } else {
        this.bsService.updateMemberPosts(this.postId, posts);
      }
     
      console.log('this.rForm.value', this.rForm.value)

      this.rForm.reset();
    }

    signIn(form: NgForm) {
      //ddd
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
      console.log(file);
    }

}
