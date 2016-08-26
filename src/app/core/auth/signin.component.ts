import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { AuthService } from "./auth.service";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="form-group">
                <label for="username">User name</label>
                <input formControlName="username" type="text" id="username" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
        </form>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

    onSignin() {
        this.authService.signinUser(this.myForm.value)
            .subscribe(
            res => {
                if (res.success) {
                    this.authService.saveToken(res.body);
                    this.router.navigate(['/']);
                }
            }
            )
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
