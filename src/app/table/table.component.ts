import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: {name: string, lastname: string, status: string, id: number}[];

  constructor() {
    this.students = [
      {
        name: 'niko',
        lastname: 'shonia',
        status: 'Student',
        id: '1111111111'
      },
      {
        name:'saba',
        lastname:'shiukashvili',
        status:'student',
        id:'1111111111'
      },
      {
        name:'jano',
        lastname:'kvitandze',
        status:'Student',
        id:'1111111111'
      }

    ]
  }

  ngOnInit() {


  }


}
