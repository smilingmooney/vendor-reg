import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // cities = ['Mumbai','New Delhi','Benguluru','Hyderabad',
  // 'Chennai','Kolkata','Ahmedabad','Pune',
  // 'Cochin','Nagpur','Jaipur','Surat',
  // 'Kanpur','Noida','Chandigarh','Bhubaneshwar',
  // 'Shimla','Patna','Bhopal','Guwahati',
  // 'Kohima','Shillong','Itanagar','Kohima','Gangtok'];
 
  constructor(private fb:FormBuilder) {
    
   }
   registrationForm = this.fb.group({
   
      companyName:["Hasu",Validators.required],
      userName:["smilingmooney@gmail.com",Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password:["123456",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["123456",Validators.required],
      mobile:["8520848826",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      bankDet:this.fb.group({
        accountNumber:["bank1234",Validators.required],
        confirmAccountNumber:["bank1234",Validators.required],
        bankName:["ICICI",Validators.required],
        bankIFSC:["ICIC0000304",Validators.required]
      }),
      paymentDet:this.fb.group({
        gstNum:["GST1234",Validators.required],
        panNum:["PAN1234",Validators.required],
        address:this.fb.group({
          hno:["1234",Validators.required],
          locality:["DSNR",Validators.required],
          cities:["",Validators.required],
          state:["Telangana",Validators.required],
          pincode:["500030",Validators.required]
        })

      })

    });
    get password()
    {
      return this.registrationForm.get('password');
    }
    get mobile()
    {
      return this.registrationForm.get('mobile');
    }
    get userName()
    {
      return this.registrationForm.get('userName');
    }
  ngOnInit() {
  }
  //registrationForm=new FormGroup(
   // {
    //companyName:new FormControl('Allgreeno'),
   // userName:new FormControl(''),
   // password:new FormControl(''),
    //confirmPassword:new FormControl(''),
    //mobile:new FormControl(),
    //bankDet:new FormGroup({
    //  accountNumber: new FormControl(''),
      //confirmAccountNumber: new FormControl(''),
      //bankName: new FormControl(''),
      //bankIFSC: new FormControl('')

   // }),
   // paymentDet: new FormGroup({
      //gstNum: new FormControl(''),
      //panNum:new FormControl(''),
      //address:new FormGroup({
        //hno:new FormControl(''),
        //locality:new FormControl(''),
        //cities:new FormControl(["Mumbai","New Delhi","Benguluru","Hyderabad","Chennai","Ahmedabad","Pune"]),
       // state:new FormControl('Telangana'),
        //pincode:new FormControl()
      //})

    //})
 // });
//  loadAPI(){
//   this.registrationForm.setValue({
//     companyName:"Allgreeno",
//     userName:"smilingmooney@gmail.com",
//     password:"123456",
//     confirmPassword:"123456",
//     mobile:8520848826,
//     bankDet:{
//       accountNumber:"bank1234",
//       confirmAccountNumber:"bank1234",
//       bankName:"ICICI",
//       bankIFSC:"ICIC0000304"
//     },
//     paymentDet:{
//       gstNum:"GST1234",
//       panNum:"PAN1234",
//       address:{
//         hno:"1234",
//         locality:"DSNR",
//         cities:["c1","c2","c3"],
//         state:"Telangana",
//         pincode:500030
//       }

//     }

//   });
// } //loadapi
  onSubmit()
    {
      console.log(this.registrationForm.value);
    }
}
