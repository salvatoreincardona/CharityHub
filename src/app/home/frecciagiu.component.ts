import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frecciagiu',
  template: `
    <div class="vaigiu d-flex flex-column">
      <small>Scorri giù</small>
    <img src="../../assets/arrrowdown.png" height="20vh" width="50vw" class="mx-auto pt-2">
    </div>
  `,
  styles: ['.vaigiu {position: fixed; bottom: 5vh; left: 45vw;}']
})
export class FrecciagiuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
