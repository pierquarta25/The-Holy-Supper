package com.holysupper.pricing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Repository per l'entità PricingRequest.
 * Fornisce i metodi per salvare e recuperare i dati dal database.
 */
@Repository
public interface PricingRequestRepository extends JpaRepository<PricingRequest, UUID> {
}
