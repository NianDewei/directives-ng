import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  message: string = 'Name is required :)';
  color: string = 'red';
  form: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  hasAnError(nameField: string): boolean {
    return this.form.get(nameField)?.invalid || false;
  }

  changeMessage() {
    this.message = 'Falta el name';
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
