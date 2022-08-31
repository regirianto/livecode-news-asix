import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { InformationCompanyComponent } from './information-company/information-company.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';

@NgModule({
  declarations: [AboutComponent, InformationCompanyComponent, VisionMissionComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
