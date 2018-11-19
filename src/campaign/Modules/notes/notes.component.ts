import { Component, EventEmitter, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { NotesService } from './notes.service';
import { Observable, Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
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
  EditMode = false;
  SelectedItem: Note;
  noteType = 'myNotes';
  user: User;
  campaignId: string;
  myNotes;
  sharedNotes;
  editedTitle: string;
  editedText: string;
  myNotesSubscription: Subscription;

  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "400px",
    "width": "auto",
    "minWidth": "auto",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink"]
    ]
  };


  constructor(private service: NotesService) {
    this.localStorage = new LocalStorageService();
    this.notesService = service;

    this.user = <User>JSON.parse(this.localStorage.getItem('user'));
    this.campaignId = this.localStorage.getItem('campaignId');

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
    this.notesService.getNotes(this.campaignId, this.user._id);
  }

  public selectNote(note) {
    this.SelectedItem = note;
    this.editedText = note.text;
    this.editedTitle = note.name;
  }

  public newNote() {
    this.notesService.createNote(this.campaignId, this.user._id).then((result) => {
      this.myNotes.push(result);
      this.SelectedItem = result;
    });
  }

  public deleteNote() {
    this.notesService.removeNote(this.SelectedItem).then((result) => {
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

  public saveNote() {
    this.SelectedItem.text = this.editedText;
    this.SelectedItem.name = this.editedTitle;
  }
}
