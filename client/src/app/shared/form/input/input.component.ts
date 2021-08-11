import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AbstractFormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <p>
      input works!
    </p>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {

  constructor() { }

  // get input from attributes
  @Input() type:string | undefined;
  @Input() className: string | undefined;
  @Input() controller: AbstractControl | undefined;
  @Input() controlName: string | undefined;
  @Input() formGroup: AbstractFormGroupDirective | undefined;
  @Input() label: string | undefined;
  @Input() errorMsg1: string | undefined;
  @Input() errorMsg2: string | undefined;
  @Input() labelClass: string | undefined;

  ngOnInit(): void {
  }

}
