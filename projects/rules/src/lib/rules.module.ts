import { NgModule } from '@angular/core';
import { RulesComponent } from './rules.component';
import { MyDirective1Directive } from './my-directive1.directive';
import { DqPhoneNanpDirective } from './dq-phone-nanp.directive';
import { DqSsnDirective } from './dq-ssn.directive';



@NgModule({
   declarations: [
      RulesComponent,
      MyDirective1Directive,
      DqPhoneNanpDirective,
      DqSsnDirective
   ],
   imports: [],
   exports: [
      RulesComponent,
      DqPhoneNanpDirective
   ]
})
export class RulesModule { }
