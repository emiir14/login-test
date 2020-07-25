import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      text: 'Plaza Colón',
      text2: 'Descripción plaza colón',
      image:
        'https://2.bp.blogspot.com/-3o7zEoNW8jo/UaeLDiG-hkI/AAAAAAAABwQ/ttMnRF0z0Yw/s640/Plaza+Col%C3%B3n.png',
    },
    {
      text: 'Paseo del Buen Pastor',
      text2: 'Lugar de entretenimiento en Capital',
      image:
        'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d38313036303834',
    },
    {
      text: 'Torre Eifel',
      text2: 'Lugar turistico en Francia',
      image:
        'https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/05/15141835/Torre-al-volcado2.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
