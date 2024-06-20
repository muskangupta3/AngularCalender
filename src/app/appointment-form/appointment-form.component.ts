import { Component } from '@angular/core';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-form',
  standalone: false,
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  appointment: Appointment = {
    title: '',
    date: ''
  };

constructor(private appointmentService: AppointmentService) { }

  onSubmit(): void {
    this.appointmentService.addAppointment(this.appointment);
    console.log('Form submitted:', this.appointment);
    this.appointment = { title: '', date: ''}; // Reset form
  }
}