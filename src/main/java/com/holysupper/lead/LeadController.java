package com.holysupper.lead;

import com.holysupper.lead.dto.WaitingListRequestDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller REST per le richieste riguardanti i Lead (lista d'attesa).
 */
@RestController
@RequestMapping("/api/leads")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    /**
     * Endpoint per iscriversi alla lista d'attesa.
     */
    @PostMapping
    public ResponseEntity<Void> createLead(@Valid @RequestBody WaitingListRequestDto dto) {
        leadService.saveLead(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
