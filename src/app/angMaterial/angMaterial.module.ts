import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,
  MatInputModule, MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatBadgeModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],
})
export class AngMaterialModule { }
