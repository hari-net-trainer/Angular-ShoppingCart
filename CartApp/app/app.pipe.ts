import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
    if (args[0] == "words"){
      let wordArr = value.split(" ");
      let revArr = [];
      for (let i = 0; i < wordArr.length; i++){
        let wrd = wordArr[i].split("").reverse().join("");
        revArr.push(wrd);
      }
      return revArr.join(" ");
    }
    else {
      let charArr = value.split("");
      charArr = charArr.reverse();
      return charArr.join("");
    }
  }
}
