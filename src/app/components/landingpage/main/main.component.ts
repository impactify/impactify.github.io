import { Component } from '@angular/core';
import { TeamMember } from './teamMember';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  teammembers = [
    new TeamMember('Tobias', '../../../assets/images/portraits/Tobi.jpg', '#5A22F2', 'IT'),
    new TeamMember('Fabian', '../../../assets/images/portraits/Fabian.jpg', '#5A22F2', 'Koordination'),
    new TeamMember('Emine', '../../../assets/images/portraits/Emine.jpg', '#5A22F2', 'IT'),
    new TeamMember('Ena', '../../../assets/images/portraits/Ena.jpg', '#5A22F2', 'Koordination'),
    new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'IT'),
    new TeamMember('Julia', '../../../assets/images/portraits/Julia.jpg', '#5A22F2', 'Koordination'),
    new TeamMember('Lara', '../../../assets/images/portraits/Lara.jpg', '#5A22F2', 'IT'),
    new TeamMember('Michael', '../../../assets/images/portraits/Michael.jpg', '#5A22F2', 'Koordination'),
    new TeamMember('Paula', '../../../assets/images/portraits/Paula.jpg', '#5A22F2', 'IT'),
    new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'Koordination')
  ];
  teammember = this.teammembers[0];
}
