import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cmv-fomr',
  templateUrl: './fomr.component.html',
  styleUrls: ['./fomr.component.css']
})
export class FomrComponent implements OnInit {

  title = "";
  group!: FormGroup;

  constructor(private reference: MatDialogRef<FomrComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "Editar" : "Nuevo";
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data._id : null),
      name: new FormControl(this.data?.name, Validators.required),
      address: new FormControl(this.data?.address, Validators.required)
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }

}
