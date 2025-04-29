package com.healthcare.dto;

import lombok.Data;

@Data
public class DoctorDto {
    private Long id;
    private String specialization;
    private String qualification;
    private String availability;
    private String experience;
}
