import { Validator, NG_VALIDATORS, FormControl } from "@angular/forms";
import { Directive, OnInit, forwardRef } from "@angular/core";

@Directive({
  selector: "[DqPhoneNanp]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: DqPhoneNanpDirective, multi: true }
  ]
})
export class DqPhoneNanpDirective implements Validator, OnInit {

  ngOnInit() {}

  validate(c: FormControl) {
    let v: number = +c.value;
    const regexStr = /^(?:\([2-9][0-8]\d\)\ ?|[2-9][0-8]\d[\-\ \.\/]?)[2-9]\d{2}[- \.\/]?\d{4}\b$/;

    let regEx = new RegExp(regexStr);

    if (regEx.test(c.value))
      return null;
    else
      return { nanp: true, stat: "aaaa" };
  }
}
