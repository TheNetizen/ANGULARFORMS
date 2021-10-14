import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LogiService } from '../logi.service';


@Component({
  selector: 'app-enrolment-form',
  templateUrl: './enrolment-form.component.html',
  styleUrls: ['./enrolment-form.component.css']
})
export class EnrolmentFormComponent implements OnInit {

  constructor(private service:LogiService) { }

  ngOnInit(): void {
  }
 topic=['Angular','React','Vue']
 userModel=new User('Harshita','harshita@gmail.com','1234567890','default','morning',true)
 setErrorFlag=false
 isSubmitted=false
 errorMsg=''

 validateCourse(value:any){
   console.log(value)
if(value==='default'){
  this.setErrorFlag=true
}else{
  this.setErrorFlag=false
}

 }
 onSubmit(){
   this.isSubmitted=true
   this.service.enroll(this.userModel).subscribe(
     data=>console.log("success!",data),
     error=>this.errorMsg=error.statusText
   )
 }
}
