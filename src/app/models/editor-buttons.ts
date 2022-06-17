import {ExecCommand} from './exec-command';
import {
  faAlignCenter, faAlignJustify,
  faAlignLeft, faAlignRight,
  faBold, faIndent,
  faItalic, faLink, faListOl, faListUl, faOutdent, faPalette,
  faRedo,
  faRemoveFormat,
  faStrikethrough, faSubscript, faSuperscript,
  faUnderline,
  faUndo, faUnlink
} from '@fortawesome/free-solid-svg-icons';
import {ToolbarItem, ToolbarItemType} from './button';

export const BUTTONS: ToolbarItem[] = [
  {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: faUndo, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.redo, icon: faRedo, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.removeFormat, icon: faRemoveFormat, state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.bold, icon: faBold, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.italic, icon: faItalic, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.underline, icon: faUnderline, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.strikeThrough, icon: faStrikethrough, state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyLeft, icon: faAlignLeft, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyCenter, icon: faAlignCenter, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyRight, icon: faAlignRight, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyFull, icon: faAlignJustify, state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.insertOrderedList, icon: faListOl, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.insertUnorderedList, icon: faListUl, state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.indent, icon: faIndent, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.outdent, icon: faOutdent, state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.subscript, icon: faSubscript, state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.superscript, icon: faSuperscript, state: false},
  {type: ToolbarItemType.Separator},
  {
    type: ToolbarItemType.Select, command: ExecCommand.fontSize, state: 3, items: [
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
      {value: 5, label: '5'},
      {value: 6, label: '6'},
      {value: 7, label: '7'},
    ]
  },
  {type: ToolbarItemType.Color, command: ExecCommand.foreColor, icon: faPalette, state: 'rgb(0, 0, 0)'},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: faLink, text: 'Create link'},
  {type: ToolbarItemType.Button, command: ExecCommand.unlink, icon: faUnlink, state: ''},
];
