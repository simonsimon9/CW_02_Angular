import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'phonenumberPipe'})

export class PhoneNumberPipe implements PipeTransform{

    transform(phone: number): string {
        let convertedNumber = phone.toString();
        let formattedNumber: string = "(";
        for (let i = 0; i<convertedNumber.length;++i){
            formattedNumber += convertedNumber.charAt(i);
            if(i == 2){
                formattedNumber +=")"
            }
            if(i == 5){
                formattedNumber += "-"
            }
        }
        return formattedNumber;
    }
}