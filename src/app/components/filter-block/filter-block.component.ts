import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryList } from './condition.config';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {

  categoryList = categoryList;
  cityEName = '';
  keyword = '';
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(val => {
      this.keyword = val['keyword'];
      this.cityEName = val['city'];
    });
  }

  search(city: string) {
    this.cityEName = city;
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
