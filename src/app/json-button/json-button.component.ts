import { Component, OnInit,Input } from '@angular/core';
import {CP,CPHead} from '../cpinterface';
@Component({
  selector: 'app-json-button',
  templateUrl: './json-button.component.html',
  styleUrls: ['./json-button.component.css']
})
export class JsonButtonComponent implements OnInit {

  
  @Input() cpProg01: CP[];
  @Input() cpProg02: CP[];
  @Input() cpProg03: CP[];
  @Input() cpHead: CPHead;
  outArea: string;
  
  cpChoice: CP[];

  displayJSON(term){
    switch(term){
      case 1: this.cpChoice = this.cpProg01; break;
      case 2: this.cpChoice = this.cpProg02; break;
      case 3: this.cpChoice = this.cpProg03; break;
    }

    this.outArea =`<h3>Class list for Term ${term} </h3>`;
    this.outArea +=
    `
    <table>
      <tr> 
      <th>Name</th> <th>Publisher</th> <th>Author</th> <th>Opinion</th>
      </tr>
    `;
    for(let cls of this.cpChoice){
      this.outArea +=
      `
        <tr>
        <td><strong>${cls.name}</strong></td>
        <td>${cls.publisher}</td>
        <td>${cls.author}</td>
        <td>${cls.opinion}</td>
        </tr>
      `
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
