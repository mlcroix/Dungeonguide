import { Component, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { NotesService } from './notes.service';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../../../app/app.localStorageService';
import { Note } from '../../../models/note';


@Component({
    selector: 'app-notes-selector',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})

export class NotesComponent {
  localStorage: LocalStorageService;
  loaded = false;
  SelectedItem = null;
  noteType = 'myNotes';
  myNotes: Note[];
  sharedNotes: Note[];


  constructor() {
    this.localStorage = new LocalStorageService();

    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
        this.loaded = true;
        console.log(this.loaded);
      }
  }
}
