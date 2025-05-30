package com.healthcare.repository;

import com.healthcare.model.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {

    Optional<Symptom> findBySymptomName(String symptomName);

}
