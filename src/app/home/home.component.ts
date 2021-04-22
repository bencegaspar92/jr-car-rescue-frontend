import {Component, OnInit} from '@angular/core';
import {CarModel} from '../models/car.model';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: any[];
  cars: CarModel[];
  responsiveOptions: any;

  constructor(private carService: CarService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.carService.getCars().then(cars => {
      this.cars = cars;
    });

    const dummyContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor porttitor justo,' +
      ' sed ultrices arcu convallis et. Pellentesque eu aliquam enim. Integer sit amet fermentum nibh. In vehicula sagittis' +
      ' turpis nec porta. Curabitur lacus nulla, mattis a lacinia eget, fringilla sit amet nisl. Donec et finibus diam, a imperdiet augue.';

    this.cards = [
      {
        title: 'Autómentés',
        content: dummyContent
      },
      {
        title: 'Anyagszállítás',
        content: dummyContent
      },
      {
        title: 'Autóink',
        content: dummyContent
      },
      {
        title: 'Rólunk',
        content: dummyContent
      },
      {
        title: 'Kapcsolat',
        content: dummyContent
      }
    ];
  }
}
