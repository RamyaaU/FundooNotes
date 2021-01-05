import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService} from '../../services/note-service.service'
import { DataServiceService} from '../../services/data-service.service'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NoteServiceService,private dataService: DataServiceService) { }

  ngOnInit() {
  }
  
  @Input() note:any

  deleteNote(){
  console.log(this.note);
    
    let data = {
    
      noteIdList: [this.note.id],
      isDeleted: true
    }


    this.noteService.deleteNotes(data).subscribe((response)=>{
      console.log("deleted successfyull ");
      this.dataService.changeMessage("deleted")
      
    });
  }

  addNote(){
    console.log(this.note);

    let data = {
    
      noteIdList: [this.note.id],
      isAdded: true
    }

    this.noteService.createNote(data).subscribe((response)=>{
      console.log("added successfyull ");
      this.dataService.changeMessage("Added")
      
    });
  }
}