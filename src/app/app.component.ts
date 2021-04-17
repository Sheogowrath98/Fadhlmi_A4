import { Component } from '@angular/core';
import { Student } from './myclasses/student';
import {CP,CPHead} from './cpinterface';
import CPTerm from '../assets/data/cp.json'; // this is a veirable that hold the entire json file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FadhlmiA44';

  bio: Student = {sid: 9910000, sname: "Mishaal",
                slogin: "Fadhlmi", scampus: "Davis"}

  cpHead: CPHead = CPTerm;
  t01: CP[] = CPTerm.cpterm01;            
  t02: CP[] = CPTerm.cpterm02;  
  t03: CP[] = CPTerm.cpterm03;  
}
