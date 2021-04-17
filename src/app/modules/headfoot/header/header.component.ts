import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/myclasses/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() hinfo: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
