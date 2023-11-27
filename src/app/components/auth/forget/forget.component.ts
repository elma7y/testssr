import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ForgetComponent {
  forget: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
}
