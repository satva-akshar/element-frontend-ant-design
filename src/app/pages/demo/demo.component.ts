import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzSubmenuService } from 'ng-zorro-antd/menu';
interface ItemData {
  id: number;
  name: string;
  age: number;
  gender: string;
  newsletter: boolean;
  phone: number;
}


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];
  isVisibleMiddle = false;
  userForm!: FormGroup;
  radioValue = 'M';
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Name: [null, [Validators.required]],
      Age: [null, [Validators.required]],
      Gender: [null, [Validators.required]],
      Newsletter: [false],
      PhoneNumber: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    let userData = localStorage.getItem("listOfUser");
    if (userData) {
      this.listOfData = JSON.parse(userData);
    }
  }


  showModalMiddle(): void {
    this.userForm.reset();
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {

    for (const i in this.userForm.controls) {
      if (this.userForm.controls.hasOwnProperty(i)) {
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.userForm.status === "VALID") {
      this.isVisibleMiddle = false;
      this.listOfData.push(
        {
          id: this.listOfData.length + 1,
          name: this.userForm.value.Name,
          gender: this.userForm.value.Gender,
          age: this.userForm.value.Age,
          newsletter: this.userForm.value.Newsletter,
          phone: this.userForm.value.PhoneNumber
        }
      );
      localStorage.setItem("listOfUser", JSON.stringify(this.listOfData));
    }
  }

  handleCancelMiddle(): void {
    this.userForm.reset();
    this.isVisibleMiddle = false;
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  deleteRow(id: number): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
    localStorage.setItem("listOfUser", JSON.stringify(this.listOfData));
  }

}
