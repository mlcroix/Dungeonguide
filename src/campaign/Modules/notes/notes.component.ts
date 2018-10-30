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
  notesService: NotesService;
  loaded = false;
  SelectedItem = null;
  noteType = 'myNotes';
  myNotes: Note[];
  myNotesSubscription: Subscription;
  //sharedNotes: Note[];


  constructor(private service: NotesService) {
    this.localStorage = new LocalStorageService();
    this.notesService = service;

    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
        //this.myNotesSubscription = this.notesService.myNotes.subscribe(notes => this.myNotes = notes);
        this.myNotesSubscription = this.notesService.myNotes.subscribe(notes => this.myNotes = notes);

        this.loaded = true;
      }
  }

  public giveNotes() {
    console.log(this.myNotes);
    console.log(this.myNotesSubscription);
  }
}
