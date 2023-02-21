import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.services';

interface User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor(private authService: AuthService) { }
  public user: User = this.fetchUser();

  public name: string = 'Maik Vinicius';
  public age: number = 26;
  private isDeveloper: boolean = true;
  public movies: string[] = [
    'Matrix', 'Inception', 'The Lord of the Rings'
  ]
  public showTitle: boolean = true;

  public toggleTitle(): void {
    this.showTitle = !this.showTitle;
  }

  public fetchUser(): User {
    return {
      id: 1,
      name: 'Maik Vinicius',
      email: 'maikmv.mv@gmail.com',
      admin: true
    }
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('dev')
  });

  public save(): void {
    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      alert("Formulário inválido")
    }
  }
}
