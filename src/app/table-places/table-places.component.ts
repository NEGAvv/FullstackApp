import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';

interface TouristPlace {
  id: number;
  name: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-table-places',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './table-places.component.html',
  styleUrls: ['./table-places.component.css'],
})
export class TablePlacesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'location', 'description'];
  dataSource: MatTableDataSource<TouristPlace> = new MatTableDataSource<TouristPlace>();
  totalRecords = 50;
  pageSize = 10;
  isLoading = false;

  touristPlaces: TouristPlace[] = [];

  ngOnInit(): void {
    this.generateTouristPlaces(); 
    this.loadTouristPlaces(0, this.pageSize); 
  }

  generateTouristPlaces(): void {
    this.touristPlaces = Array.from({ length: this.totalRecords }, (_, i) => ({
      id: i + 1,
      name: faker.location.city(),
      location: faker.location.country(),
      description: faker.lorem.sentence(),
    }));
  }

  loadTouristPlaces(pageIndex: number, pageSize: number): void {
    this.isLoading = true;
    setTimeout(() => {
      const start = pageIndex * pageSize;
      const end = start + pageSize;

      this.dataSource.data = this.touristPlaces.slice(start, end);
      this.isLoading = false;
    }, 1000);
  }

  onPageChange(event: PageEvent): void {
    this.loadTouristPlaces(event.pageIndex, event.pageSize);
  }
}
