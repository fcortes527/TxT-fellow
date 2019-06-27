import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'Feliciano Cortes';
  public form: FormGroup;
  // blogs start off empty
  public blogs = [];

  constructor(public _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    console.log(this.form.value);
    // add logic here to print out new blogs
    // hint update your array of blogs
    this.form.valid && (this.blogs.push(this.form.value),
    this.form.reset())

  }
}
