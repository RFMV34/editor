import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import { WysiwygEditorComponent } from './wysiwyg-editor/wysiwyg-editor.component';
import { EditorColorPickerComponent } from './editor-color-picker/editor-color-picker.component';
import {EditorButtonComponent} from './editor-button/editor-button.component';
import { EditorSelectComponent } from './editor-select/editor-select.component';
import { EditorInputComponent } from './editor-input/editor-input.component';
import { EditorSeparatorComponent } from './editor-separator/editor-separator.component';

@NgModule({
  declarations: [
    AppComponent,
    WysiwygEditorComponent,
    EditorButtonComponent,
    EditorColorPickerComponent,
    EditorSelectComponent,
    EditorInputComponent,
    EditorSeparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
