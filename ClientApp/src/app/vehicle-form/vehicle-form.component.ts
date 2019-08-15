import { FeatureService } from './../services/feature.service';
import { Component, OnInit } from '@angular/core';
import { MakeService } from '../services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: any = {};

  constructor(private makeService: MakeService, private featureService: FeatureService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes =>
      this.makes = makes);

    this.featureService.getFeatures().subscribe(features =>
      this.features = features);
  }

  onMakeChange(makeId) {
    // tslint:disable-next-line:prefer-const
    let selectedMake = this.makes.find(m => m.id.toString() === makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

}
