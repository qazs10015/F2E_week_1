import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  keyword = '';
  cityEName = '';
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(val => {
      this.keyword = val['keyword'];
      this.cityEName = val['city'];
    });

  }

  search() {

    const queryParams: any = {}
    if (this.cityEName) {
      queryParams.city = this.cityEName;
    }
    if (this.keyword) {
      queryParams.keyword = this.keyword;
    }

    this.router.navigate(['travel'], { queryParams })
  }

}
