import {Validator,AbstractControl,NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core'
@Directive({
    selector:'[appConfirmPasswordMatch]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ConfirmEqualValidatorDirective,
        multi:true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator
{
    validate(passwordGroup:AbstractControl):{[key:string]:any} |null
    {
        const passwordControl=passwordGroup.get('password');
        const confirmpasswordControl=passwordGroup.get('confirmpassword'); 
        if(passwordControl && confirmpasswordControl && passwordControl.value!=confirmpasswordControl.value)
        {
            return {'notEqual':true};
        }        
        return null;
    }
}