import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  countryList:Country[]=[
    new Country("1","India"),
    new Country("2", "USA"),
    new Country("3", "Britain")
  ]



  contactForm=new FormGroup({
    firstName: new FormControl(),

    // setting default value as string
    // firstName: new FormControl('Sachin'),

    // setting default value and disabled state as object
    // firstName: new FormControl({value:'Rahul', disabled:true}),

    // sync validators, you can pass with validator function as shown below
    // firstName: new FormControl('',[Validators.required, Validators.minLength(10)]),
    lastName:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),

    // grouping the controls using formGroups
    address:new FormGroup({
      city:new FormControl(),
      street:new FormControl(),
      pincode:new FormControl()
    }),
    country:new FormControl()
  })

  onSubmit(){
    console.log(this.contactForm.value);
  }
}

export class Country{

  "id":string;
  "name":string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}


