import { Component, OnInit } from '@angular/core';
import { ShoeService } from './shoe.service';
import { Shoe } from './shoe';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public shoes: Shoe[] = [];
  constructor(private shoeService: ShoeService, private title: Title){}

  ngOnInit(): void {
    this.title.setTitle("ShoeApp")
  }

}
