import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NoteServiceService} from '../../services/note-service.service'

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  flag 
  isOpen = true;
  title = ''
  description = ''
  hide = true;
  click() {
    this.isOpen = true;
  }
  constructor(private noteService: NoteServiceService) { }

  @Output() messageEvent = new EventEmitter<string>();


  ngOnInit() {
  }

  addNote() {
    let data = {
      title: this.title,
      description: this.description
    }
    console.log(" add note data ", data);

    this.noteService.createNote(data).subscribe((response) => {
      console.log(response);
      let message="note created successfull"
      this.messageEvent.emit(message);

    })


  }
}