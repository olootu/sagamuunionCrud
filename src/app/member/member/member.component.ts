import { Component, OnInit } from '@angular/core';
import {Member, Post} from '../../models/members.model';
import {MembersService} from '../../core/members.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
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



    constructor(private bsService: MembersService, public route: ActivatedRoute) { }

    ngOnInit() {
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
            } else {
              this.mode = 'create';
              this.postId = null;
            }
          });
    }
   ngOnDestroy() {
     this.postsSub.unsubscribe();
   }
    addMember(form: NgForm ) {
      const posts: Member = {
        id: '',
        name: form.value.name,
        email: form.value.email,
        telephone: form.value.telephone
      };
      this.bsService.addMemberPosts(posts);

      form.reset();
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

}
