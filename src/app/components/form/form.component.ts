import { JwtService } from './../../jwt.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  email = '';
  password = '';

  constructor(private jwtService: JwtService, private router: Router) {}

  ngOnInit(): void {}

  // getSome() {
  //   this.jwtService.getSome().subscribe((data));
  //   }
  // }

  login() {
    this.jwtService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);

        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('ERROR AL LOGUEAR');
      }
    );
  }
}
