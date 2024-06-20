import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  private appointments: Appointment[] = [];
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
    this.appointmentsSubject.next(this.appointments);
  }

  deleteAppointment(appointment: Appointment): void {
    this.appointments = this.appointments.filter(a => a !== appointment);
    this.appointmentsSubject.next(this.appointments);
  }

  getAppointmentsSubject(): BehaviorSubject<Appointment[]> {
    return this.appointmentsSubject;
  }
}
