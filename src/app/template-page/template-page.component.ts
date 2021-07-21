import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.css'],
})
export class TemplatePageComponent implements OnInit {
  @ViewChild('f') temForm: NgForm;

  usernames: any;
  gender: any;

  constructor() {
    this.temForm = {} as NgForm;
    this.usernames = ['teacher', 'student'];
    this.gender = ['male', 'female'];
  }

  ngOnInit(): void {}

  onGenerateName(): void {
    let now = new Date();
    let usern = this.usernames[now.getMilliseconds() % 2];
    // this.temForm.setValue({
    //   userData: {
    //     username: usern,
    //     email: '2',
    //     password: '1',
    //   },
    // });
    this.temForm.form.patchValue({
      userData: {
        username: usern,
      },
    });
  }

  // onSubmit(f: NgForm): void {
  //   console.log(f);
  // }
  onSubmit(): void {
    console.log(this.temForm);
    this.temForm.reset();
  }
}
