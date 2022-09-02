import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ErrorMessage]',
})
export class ErrorMessageDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  // directives
  // defaulColor: string = 'invalid-feedback';
  private _defaulColor: string = 'red';
  private _defaulMessage: string = 'Is required.';

  @Input() set color(value: string) {
    this._defaulColor = value;
    this.setColor();
  }

  @Input() set message(value: string) {
    this._defaulMessage = value;
    this.setMessage();
  }

  @Input() set valido(value: boolean) {
    const hidden = 'visually-hidden';
    if (!value) this.htmlElement.nativeElement.classList.add(hidden);
    if (value) this.htmlElement.nativeElement.classList.remove(hidden);
  }

  constructor(private _el: ElementRef<HTMLElement>) {
    this.htmlElement = _el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const { message, color } = changes;
    // if (message) {
    //   const messageValue = message.currentValue;
    //   this.htmlElement.nativeElement.innerText = messageValue;
    // }
    // if (color) {
    //   const colorValue = color.currentValue;
    //   this.htmlElement.nativeElement.classList.add(colorValue);
    // }
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('Method  implemented.');
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    // this.htmlElement.nativeElement.removeAttribute('class');
    // this.htmlElement.nativeElement.classList.remove(this.defaulColor);
    // this.htmlElement.nativeElement.classList.add(this.defaulColor);
    this.htmlElement.nativeElement.style.color = this._defaulColor;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage() {
    this.htmlElement.nativeElement.innerText = this._defaulMessage;
  }
}
