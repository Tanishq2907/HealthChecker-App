package com.healthcare.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentDto {
    private Long id;
    private Long userId;
    private Long doctorId;
    private LocalDateTime appointmentDate;
    private String status;
}
