import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
    Hello World
    <!-- <p>Hello India</p> -->
    <!-- <p>Hello US</p>-->
    <!-- <form [formGroup]="loginForm">
      <div formGroupName="userCredentials">
        <div class="form-group">
          <div class="input-group">
            <input
              formControlName="userName"
              class="form-control"
              id="username"
              placeholder="Username"
              autofocus
            />
          </div>
        </div>
      </div>
    </form> -->
  `,
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  name = "World";
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userCredentials: this.formBuilder.group({
        userName: ["", [Validators.required, Validators.minLength(2)], []],
        password: ["", [Validators.required]],
      }),
    });
  }
}
