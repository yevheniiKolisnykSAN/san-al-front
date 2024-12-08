import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common"
import {Button} from "primeng/button"
import {CutTextPipe} from "../../../shared/pipes/cut-text.pipe"

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    Button,
    CutTextPipe
  ],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss'
})
export class CatalogCardComponent {

}
