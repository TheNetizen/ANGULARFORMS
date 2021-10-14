//conditional validation in form for email n subscribe and adding dynamic form element emailnusing FormArray
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import {forbiddenNameValidator} from '../../shared/validator-form'
import { matchPassword } from '../../shared/validator-form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  registrationForm!: FormGroup;   
  get email(){
    return this.registrationForm.controls.email;
  }
  get alternateEmail(){
    return this.registrationForm.controls.alternateEmail as FormArray
  }
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
      this.registrationForm= this.fb.group({
      name:['vishwas',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
      password:[],
      cnfpassword:['',[Validators.required]],
      subscribe:[false],
      email:['',[]],
      address: this.fb.group({
        city: [],
        area: [],
        postal: []
      }),
      alternateEmail:this.fb.array([])
    },{validator:matchPassword})
  this.registrationForm.controls.subscribe.valueChanges.subscribe(
    checkvalue=>{const email=this.registrationForm.controls.email.value
                if(checkvalue){
                  this.registrationForm.controls.email.setValidators([Validators.required])
                }else{
                  this.registrationForm.controls.email.clearValidators()
                }
                this.registrationForm.controls.email.updateValueAndValidity()
    }
  )
  }
  
  addField(){
this.alternateEmail.push(this.fb.control(''))
  }
}
