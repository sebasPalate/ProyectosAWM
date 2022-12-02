import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeypadButton } from '../../interfaces/keypad.interface';

@Component({
  selector: 'cmv-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.css']
})
export class KeypadButtonComponent implements OnInit {

  // Añadido
  @Input() keypadButtons: KeypadButton[] = [];
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  // Fin

  constructor() { }

  ngOnInit(): void {
  }

  // Añadido
  doAction(action: string) {
    this.onClick.emit(action);
  }
  // Fin

}
