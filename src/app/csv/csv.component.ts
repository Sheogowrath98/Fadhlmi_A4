import { Component, OnInit } from '@angular/core';
import {Sales} from '../myclasses/sales';
import {SalesHeader} from '../myclasses/sales';
@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  // styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  fileUrl = "../../assets/data/SalesOrders.csv";
  csvData: Sales[] = [];
  csvHead: SalesHeader[] = [];

  async ngAfterViewInit() {
    var response = await fetch(this.fileUrl);
    var data = await response.text();

    // split data based on \n
    let lines = data.split("\n");
    let headers: string;
    headers = lines[0]; //first line of data (headers)

    // var words = lines[0].split(",");
    // var h = new SalesHeader;
    // h.sdate = words[0];
    // h.region = words[1];
    // h.rep = words[2];
    // h.item = words[3];
    // h.unit = words[4];
    // h.cost = words[5];
    // h.total = words[6];

    // this.csvHead.push(h);


    for(let x =1; x <lines.length; x++){
      var words = lines[x].split(",");
      var p = new Sales;
      for (var y =1; y <words.length; y++){
      p.sdate = words[0];
      p.region = words[1];
      p.rep = words[2];
      p.item = words[3];
      p.unit = parseFloat(words[4]);
      p.cost = parseFloat(words[5]);
      p.total = parseFloat(words[6]);
      }
      this.csvData.push(p)
    }
      console.log(this.csvHead);
      console.log(this.csvData);
  }// end of ngAfterView
  constructor() { }

  ngOnInit(): void {
  }

}
