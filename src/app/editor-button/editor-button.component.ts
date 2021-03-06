import {Component, Input, EventEmitter, Output} from '@angular/core';
import {EditorButton} from '../models/button';
import {ExecCommand} from '../models/exec-command';

@Component({
  selector: 'app-editor-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.scss']
})
export class EditorButtonComponent {

  @Input() button: EditorButton;
  @Output() command = new EventEmitter<ExecCommand>();

  constructor() { }

  onCommand(command: ExecCommand): void {
    this.command.emit(command);
  }

}
