import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  searchKey = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchKeyChange(event: any) {
    this.searchKey = event;
  }

}
