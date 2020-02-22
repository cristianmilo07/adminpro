import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input() public ChartLabels: Label[] = [];
  @Input() public ChartData: MultiDataSet = [];
  @Input() public ChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
