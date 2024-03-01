import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  step:any = 1;
  message!: string;
  submitted = false;
  steperline:any = 0;
  bg_color_truck:any;
  color_truck:any;
  bg_color_pad:any;
  color_pad:any;
  bg_color_check:any;
  color_check:any;
  // file!: string;
  
  contactForm:FormGroup = new FormGroup({
    title : new FormControl(''),
    f_name : new FormControl(''),
    l_name : new FormControl(''),
    phone : new FormControl(''),
    email : new FormControl(''),

  });
  addressForm:FormGroup = new FormGroup({
    address_1 : new FormControl(''),
    address_2 : new FormControl(''),
    city : new FormControl(''),

  });

  private formBuilder = inject(FormBuilder);

  ngOnInit() :void{     //used to call services or to set up subscriptions

    this.contactForm = this.formBuilder.group(
      {
        title:['', [Validators.required]],
        f_name: ['', [Validators.required]],
        l_name: ['', [Validators.required]],
        phone: ['',[ Validators.required, Validators.pattern("[0-9].*")]],
        email: ['',[ Validators.required,  Validators.email]],

      });  
    this.addressForm = this.formBuilder.group(
      {
        address_1: ['',[ Validators.required ]],
        address_2: ['',[ Validators.required]],
        city: ['',[ Validators.required]],
      });  
}

get f() :any {
  return this.contactForm?.controls;
}
get f1() :any {
  return this.addressForm?.controls;
}

contactInfo(){
  this.submitted = true;

    if(this.contactForm?.invalid){
      
      return;
         console.log(this.contactForm?.value);
    }else{
      this.step += 1;
      this.steperline = 33+'%';
      this.bg_color_truck = '#283D98';
      this.color_truck = '#fff';
      // this.isLoading = true;
      // this.loadingTitle = 'Saving....';
    
      const  InputData = this.contactForm.value;
      // const  InputData = new FormData();
      // InputData.append("name",this.orderDetailsForm.value.name);
      // InputData.append("email",this.orderDetailsForm.value.email);
      // InputData.append("course",this.orderDetailsForm.value.course);
      // InputData.append("phone",this.orderDetailsForm.value.phone);


      console.log(InputData)
  
      // var path = 'students';
  
}
}
addressInfo(){
  // this.submitted = true;

    if(this.addressForm?.invalid){
      
      return;
        //  console.log(this.addressForm?.value);
    }else{
      this.step += 1;
      this.steperline = 63+'%';
      this.bg_color_pad = '#283D98';
      this.color_pad = '#fff';
}
}
confirmOrder(){
  this.submitted = true;

  if(this.addressForm?.invalid){
    
    return;
       console.log(this.addressForm?.value);
  }else{
    this.step += 1;
    this.steperline = 100+'%';
    this.bg_color_check = '#283D98';
    this.color_check = '#fff';
    // this.isLoading = true;
    // this.loadingTitle = 'Saving....';
  
    const  InputData1 = this.addressForm.value;
    // const  InputData = new FormData();
    // InputData.append("f_name",this.addressForm.value.name);
    // InputData.append("email",this.addressForm.value.email);
    // InputData.append("phone",this.addressForm.value.phone);


    console.log(InputData1)

    // var path = 'students';
}}
cancelOrder(){
  this.step = 1;
  this.steperline = 0+'%';
  this.bg_color_truck = '#f5f5f5';
  this.color_truck = '#283D98';
  this.bg_color_pad = '#f5f5f5';
  this.color_pad = '#283D98';
}

}
