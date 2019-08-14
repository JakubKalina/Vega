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
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes =>
      this.makes = makes);
  }

  onMakeChange(makeId) {
    // tslint:disable-next-line:prefer-const
    let selectedMake = this.makes.find(m => m.id.toString() === makeId);
    this.models = selectedMake ? selectedMake.models : [];
    console.log('Wybrane', selectedMake);
  }

}
