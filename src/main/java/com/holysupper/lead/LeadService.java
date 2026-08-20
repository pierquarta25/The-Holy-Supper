package com.holysupper.lead;

import com.holysupper.lead.dto.WaitingListRequestDto;
import org.springframework.stereotype.Service;

/**
 * Servizio per la gestione dei Lead.
 * Contiene la logica di business.
 */
@Service
public class LeadService {

    private final LeadRepository leadRepository;

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    /**
     * Salva una nuova richiesta per la lista d'attesa.
     */
    public Lead saveLead(WaitingListRequestDto dto) {
        Lead lead = new Lead();
        lead.setKind(LeadKind.WAITING_LIST);
        lead.setFullName(dto.getFullName());
        lead.setChurch(dto.getChurch());
        lead.setRole(dto.getRole());
        lead.setCountry(dto.getCountry());
        lead.setEmail(dto.getEmail());
        lead.setPhone(dto.getPhone());
        lead.setQuantity(dto.getQuantity());
        lead.setConsent(dto.isConsent());
        lead.setLocale(dto.getLocale());
        lead.setUserAgent(dto.getUserAgent());
        lead.setReferer(dto.getReferer());

        return leadRepository.save(lead);
    }
}
