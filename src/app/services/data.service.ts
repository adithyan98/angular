import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//login user
  currentUser:any
//login acno
  currentAcno:any

  userDetails:any = {
    1000:{acno:1000,username:'Neer',password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,username:'Laisha',password:1001,balance:4000,transaction:[]},
    1002:{acno:1002,username:'Vyom',password:1002,balance:6000,transaction:[]}
  }
  constructor() { }

  //register
  register(acno:any,username:any,password:any){
    let userDetails = this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno] = {
        acno,
        username,
        password,
        balance:0,
        transaction:[]

      }
      console.log(userDetails);
      return true
      
    }
  }
  login(acno:any,pswd:any){
    let userDetails = this.userDetails
    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
        this.currentUser=userDetails[acno].username
        this.currentAcno = acno
        return true
    }
    else{
      alert('Incorrect Passwaord')
      return false
    }
    }
    else{
      alert('user does not Exist')
      return false
    }
  }
//deposit
deposite(acno:any,pswd:any,amt:any){
  let userDetails = this.userDetails
  var amount = parseInt(amt)

  if(acno in userDetails){
    if(pswd == userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount
      userDetails[acno]['transaction'].push({
        type:'CREDIT',
        amount
      }
      )
      console.log(userDetails);
      return userDetails[acno]['balance']
    }
    else{
      alert('incorrect Password')
    }
  }
  else{
    alert('User does not Exist')
    return false
  }

}
withdraw(acno:any,pswd:any,amt:any){
  let userDetails = this.userDetails
  var amount = parseInt(amt)

  if(acno in userDetails){
    if(pswd == userDetails[acno]['password']){
      if(userDetails[acno]['balance']>=amount){
        userDetails[acno]['balance']-=amount
        userDetails[acno]['transaction'].push({
          type:'DEBIT',
          amount
        }
        )
        
        return userDetails[acno]['balance']
      }
      else{
        alert('Insufficient Balance')
        return false
      }
    }
    else{
      alert('incorrect Password')
    }
  }
  else{
    alert('User does not Exist')
    return false
  }

}
//transaction
getTransaction(acno:any){
  return this.userDetails[acno]['transaction']
}
}
