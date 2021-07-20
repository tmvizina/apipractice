import { Component, OnInit } from '@angular/core';
import { DonutsService } from 'donuts.service';
import {D}

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  constructor(private donuts:DonutsService) { }

  ngOnInit(): void {
  }

  getDonut():any{
this.donuts.getDonut()
    .subscribe(())

  }

}
