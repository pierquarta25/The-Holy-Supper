package com.holysupper.pricing;

import com.holysupper.pricing.dto.PricingRequestDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller REST per le richieste di preventivo.
 */
@RestController
@RequestMapping("/api/pricing-requests")
public class PricingRequestController {

    private final PricingRequestService service;

    public PricingRequestController(PricingRequestService service) {
        this.service = service;
    }

    /**
     * Endpoint per inviare una richiesta di preventivo.
     */
    @PostMapping
    public ResponseEntity<Void> createPricingRequest(@Valid @RequestBody PricingRequestDto dto) {
        service.savePricingRequest(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
