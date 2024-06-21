import { Component } from '@angular/core';
import { Appointment } from '../appointment.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  appointments: Appointment[] = [];

  constructor() {
    // Initialize appointments if needed
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  deleteAppointment(appointment: Appointment) {
    const index = this.appointments.indexOf(appointment);
    if (index >= 0) {
      this.appointments.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<Appointment[]>) {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
    }
  }
}
