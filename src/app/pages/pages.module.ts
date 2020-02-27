import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { from } from 'rxjs';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';



@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent,
      IncrementadorComponent,
      GraficoDonaComponent,
      AccoutSettingComponent
    ],
    exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent
    ],
    imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
    ]
})

export class PagesModule { }
