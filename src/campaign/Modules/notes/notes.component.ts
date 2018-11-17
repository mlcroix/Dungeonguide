import { Component, EventEmitter, OnInit, OnDestroy, Input } from '@angular/core';
import { NotesService } from './notes.service';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../../../app/app.localStorageService';
import { CampaignService } from '../../campaign.service';
import { Note } from '../../../models/note';
import { User } from '../../../models/user';


@Component({
    selector: 'app-notes-selector',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})

export class NotesComponent {
  localStorage: LocalStorageService;
  notesService: NotesService;
  loaded = false;
  SelectedItem: Note;
  noteType = 'myNotes';
  user: User;
  campaignId: string;
  myNotes;
  sharedNotes;

  myNotesSubscription: Subscription;


  constructor(private service: NotesService) {
    this.localStorage = new LocalStorageService();
    this.notesService = service;

    this.user = <User>JSON.parse(this.localStorage.getItem('user'));
    console.log(this.user._id);
    this.campaignId = this.localStorage.getItem('campaignId');
    console.log('campaignId: ' + this.campaignId);

    if (this.user) {
        this.myNotesSubscription = this.notesService.myNotes.subscribe(myNotes => this.myNotes = myNotes);
        this.notesService.getNotes(this.campaignId, this.user._id);
        this.loaded = true;
      }
  }

  public ngOnDestroy(): void {
    this.myNotesSubscription.unsubscribe();
  }

  public getNotes() {
    console.log(this.myNotes);
    this.notesService.getNotes(this.campaignId, this.user._id);
  }

  public selectNote(note) {
    this.SelectedItem = note;
  }

  public newNote() {
    this.notesService.createNote(this.campaignId, this.user._id).then((result) => {
      this.myNotes.push(result);
      this.SelectedItem = result;
    });
  }

  public deleteNote() {
    this.notesService.removeNote(this.SelectedItem).then((result) => {
      console.log(result);
      if (result.deleted) {
        this.removeItemFromArray(this.SelectedItem, this.myNotes);
        if (this.myNotes.length > 0) {
          this.SelectedItem = this.myNotes[0];
        } else {
          this.SelectedItem = null;
        }
      }
    });
  }

  private removeItemFromArray(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (item === array[i]) {
        array.splice(i, 1);
        return i;
      }
    }
  }
}
