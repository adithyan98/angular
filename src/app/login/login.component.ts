import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

aim = 'Your Perfect Banking Partner'
account = 'Enter Your Account Here'
acno=''
pswd=''
  //database bank
  userDetails:any = {
    1000:{acno:1000,username:'Neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:4000},
    1002:{acno:1002,username:'Vyom',password:1002,balance:6000}
  }

  //consrtuctor
  constructor() { }

  //life cycle hook of angular
  ngOnInit(): void {
  }

  //acnoChange
  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
    
  }

  //user defined function
  login(){
    var acno = this.acno
    var pswd = this.pswd

    let userDetails = this.userDetails

    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
      alert('login successfull')
    }
    else{
      alert('user does not Exist')
    }
    }
    else{
      alert('user does not Exist')
    }
  }

}
