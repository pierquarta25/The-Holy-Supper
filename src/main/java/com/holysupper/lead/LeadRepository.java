package com.holysupper.lead;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Repository per l'entità Lead.
 * Fornisce i metodi per salvare e recuperare i dati dal database.
 */
@Repository
public interface LeadRepository extends JpaRepository<Lead, UUID> {
}
