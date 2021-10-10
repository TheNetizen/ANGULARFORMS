import { Component, OnInit } from '@angular/core';
import { LogiService } from '../logi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!:String
  password!:String
  data!:any
  errorMesssage!:String
  constructor(private serv:LogiService) { }

  ngOnInit(): void {
  }
submitLog(){
  let d={
    "username":this.username,
    "password":this.password
  }
  this.serv.login(d).subscribe(
    (success)=>this.data=success,
    error=>this.errorMesssage=error.error.message
  )
}
}
