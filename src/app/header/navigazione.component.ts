
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigazione',
  templateUrl: './navigazione.component.html',
  styleUrls: ['./navigazione.component.css']
})
export class NavigazioneComponent implements OnInit {
  
  open: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  
  }

  toggle() {
    this.open = !this.open;
  }

}