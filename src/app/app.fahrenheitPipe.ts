import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'fahrenheitPipe'})

export class FahrenheitPipe implements PipeTransform{
    transform(celsius: number):string {
        let fah = celsius * 9 / 32 + 32;
        let output = fah.toString() + " " + `\u2109`; //unicode for fahrenheit
        return output;
        
    }
}