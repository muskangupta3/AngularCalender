// calendar.component.ts
import { Component } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

interface Appointment {
  title: string;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  appointments: Appointment[] = [
    {
      title: 'Meeting',
      date: new Date('2024-06-25'),
    },
    {
      title: 'Lunch',
      date: new Date('2024-06-25'),
    },
    {
      title: 'Presentation',
      date: new Date('2024-06-26'),
    }
  ];

  constructor() {
    // Initialize appointments if needed
  }

  // Event handler for drag end
  onDragEnded(event: CdkDragEnd<any>) {
    // Handle drag end logic here
    console.log('Drag ended:', event);
    // Implement your logic to update appointment order or other actions
  }

  deleteAppointment(appointment: Appointment) {
    // Implement delete appointment logic
    console.log('Deleting appointment:', appointment);
    // Example: Remove appointment from array
    this.appointments = this.appointments.filter(appt => appt !== appointment);
  }
}
