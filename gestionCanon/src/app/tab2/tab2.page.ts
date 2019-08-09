import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form: FormGroup;
  

  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      referencia: [''],
      concepto: [''],
      importe: ['']
    });

  }

  agregarMovimiento(form){
    console.log(this.form.value);
  }

}
