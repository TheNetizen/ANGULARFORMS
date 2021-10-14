//cross field validation and custom validation
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
   return (control:AbstractControl):{[key:string]:any}|null=>{
    const forbidden=forbiddenName.test(control.value)
    return forbidden?{"forbiddenName":{value:control.value}}:null

   }

   
        }

export function matchPassword(control:AbstractControl):{[key:string]:boolean}|null{

   
    let password=control.get('password')
    let cnfpassword=control.get('cnfpassword')
    if(password && cnfpassword && cnfpassword.value!==password.value){
    
          return {'misMatch':true}
    }else{
        return null
    }
    
}

