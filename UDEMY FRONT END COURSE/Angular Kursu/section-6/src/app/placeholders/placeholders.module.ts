import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [PlaceholdersHomeComponent, PlaceholderComponent, SegmentComponent],
  imports: [CommonModule, PlaceholdersRoutingModule, SharedModule],
  exports: [],
})
export class PlaceholdersModule {}

/* 
  modulun altindaki componenti baske bir yerde kullanmak isitiyor isen,
  componentin modulunden -- exports -- array ine yazip export edeceksin,
  kullanmak istedigin yerdeki modulden ise -- import -- edeceksin ve imports array ine yazicaksin
*/
