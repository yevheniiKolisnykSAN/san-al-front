import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'cutText',
  standalone: true
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    return `${value.slice(0, maxLength).trimEnd()}...`
  }

}
