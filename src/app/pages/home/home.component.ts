import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from './../../jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Plaza Colón',
      description: 'Descripción plaza colón',
      image:
        'https://2.bp.blogspot.com/-3o7zEoNW8jo/UaeLDiG-hkI/AAAAAAAABwQ/ttMnRF0z0Yw/s640/Plaza+Col%C3%B3n.png',
    },
  ];

  constructor(private httpClient: HttpClient, private jwtService: JwtService) {
    // this.jwtService.getData().subscribe((data) => {
    //   console.log(data);
    // });
    this.jwtService.getData();
  }

  ngOnInit() {}
}
