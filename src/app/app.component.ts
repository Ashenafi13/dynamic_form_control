import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular';
  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      name: '',
      registration: this.fb.array([]),
    });
  }

  registration(): FormArray {
    return this.registrationForm.get("registration") as FormArray
  }

  newAddress(): FormGroup {
    return this.fb.group({
      PhoneNumber: '',
      Email: '',
    })
  }

  addAddress() {
    this.registration().push(this.newAddress());
  }

  removeAddress(i: number) {
    this.registration().removeAt(i);
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
  

