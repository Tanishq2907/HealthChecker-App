package com.healthcare.model;

import javax.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Appointment{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private User user;
    
    @ManyToOne
    private Doctor doctor;
    
    private LocalDateTime scheduledTime;
    
    @Enumerated(EnumType.STRING)
    private Status status;
    
    private String notes;
    
    public enum Status {
        PENDING, CONFIRMED, CANCELLED, COMPLETED
    }
}