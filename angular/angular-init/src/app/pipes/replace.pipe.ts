import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string, char: string, valueToReplace:string): unknown {

    return value.replace(char,valueToReplace);
    // para utilização {{ var.atribute | replace: 'valorOriginal': 'valorNovo' }}
  }
// CREATE src/app/pipes/replace.pipe.spec.ts (191 bytes)
// CREATE src/app/pipes/replace.pipe.ts (219 bytes)
// UPDATE src/app/app.module.ts (569 bytes)

}
