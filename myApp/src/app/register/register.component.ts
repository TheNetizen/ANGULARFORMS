import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  errorMessage!:String 
  successMessage!:String 
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm=this.fb.group({
       username:['',[Validators.required]],
       emailId:['',[Validators.required,this.validateEmail]],
       password:['',[Validators.required]],
       passwordcheck:['',[Validators.required]]
        
    })
  }
  validateEmail(c:FormControl){
    let data=c.value
      const regex=/^[a-z0-9.-_!#$%&]{5,}@[a-z.-]{2,}\.[a-z]{2,}$/
      let x=regex.test(data)
      if(x){
        return null
      }else{
        return {emailError:{message:"Invalid Email Id"}}
      }
  }

   

  submit(){

  }

}
