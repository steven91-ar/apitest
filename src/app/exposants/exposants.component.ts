import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-exposants',
  templateUrl: './exposants.component.html',
  styleUrls: ['./exposants.component.css']
})
export class ExposantsComponent implements OnInit {
  exposants: any[] = [];
  loading = false;
  currentPage = 1;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.getExposants();
  }

  getExposants() {
    this.loading = true;
    this.ApiService.getExposants(this.currentPage).subscribe((data: any) => {
      this.exposants = this.exposants.concat(data['exposants']);
      this.loading = false;
    });
  }

  onLoadMore() {
    if (!this.loading) {
      this.currentPage++;
      this.getExposants();
    }
  }
}
