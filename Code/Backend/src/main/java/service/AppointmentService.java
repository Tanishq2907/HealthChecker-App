package com.healthcare.service;

import com.healthcare.model.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment bookAppointment(Appointment appointment);
    List<Appointment> getAppointmentsByUserId(Long userId);
    List<Appointment> getAppointmentsByDoctorId(Long doctorId);
}
