import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  //consrtuctor
  constructor(private router:Router,private ds:DataService) { }

  //life cycle hook of angular
  ngOnInit(): void {
  }


  //user defined function
  login(){
    var acno = this.acno
    var pswd = this.pswd

    const result  = this.ds.login(acno,pswd)
    if(result){
      alert('Login Successfull')
      this.router.navigateByUrl('dashboard')
    }
    
  }

 }
  

