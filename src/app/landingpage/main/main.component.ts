import { Component } from '@angular/core';
import { Teammember} from './teammember';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  teammembers = [
    new Teammember('Tobias', '../../../assets/images/portraits/Tobi.jpg', '#5A22F2', 'IT'),
    new Teammember('Fabian', '../../../assets/images/portraits/Fabian.jpg', '#5A22F2', 'Koordination'),
    new Teammember('Emine', '../../../assets/images/portraits/Emine.jpg', '#5A22F2', 'IT'),
    new Teammember('Ena', '../../../assets/images/portraits/Ena.jpg', '#5A22F2', 'Koordination'),
    new Teammember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'IT'),
    new Teammember('Julia', '../../../assets/images/portraits/Julia.jpg', '#5A22F2', 'Koordination'),
    new Teammember('Lara', '../../../assets/images/portraits/Lara.jpg', '#5A22F2', 'IT'),
    new Teammember('Michael', '../../../assets/images/portraits/Michael.jpg', '#5A22F2', 'Koordination'),
    new Teammember('Paula', '../../../assets/images/portraits/Paula.jpg', '#5A22F2', 'IT'),
    new Teammember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'Koordination')
  ];
  teammember = this.teammembers[0];
}
