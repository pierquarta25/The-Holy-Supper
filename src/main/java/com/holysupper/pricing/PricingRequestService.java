package com.holysupper.pricing;

import com.holysupper.pricing.dto.PricingRequestDto;
import org.springframework.stereotype.Service;

/**
 * Servizio per la gestione delle richieste di preventivo.
 * Contiene la logica di business.
 */
@Service
public class PricingRequestService {

    private final PricingRequestRepository repository;

    public PricingRequestService(PricingRequestRepository repository) {
        this.repository = repository;
    }

    /**
     * Salva una nuova richiesta di preventivo nel database.
     */
    public PricingRequest savePricingRequest(PricingRequestDto dto) {
        PricingRequest request = new PricingRequest();
        request.setChurchName(dto.getChurchName());
        request.setCountry(dto.getCountry());
        request.setFirstName(dto.getFirstName());
        request.setLastName(dto.getLastName());
        request.setEmail(dto.getEmail());
        request.setPhone(dto.getPhone());
        request.setCongregationSize(dto.getCongregationSize());
        request.setCommunionAttendance(dto.getCommunionAttendance());
        request.setExpectedQuantity(dto.getExpectedQuantity());
        request.setPreferredProduct(dto.getPreferredProduct());
        request.setMessage(dto.getMessage());
        request.setNotifyWhenOrderingOpens(dto.isNotifyWhenOrderingOpens());
        request.setLanguage(dto.getLanguage());
        request.setStatus("New"); // Impostato come nuovo
        request.setUserAgent(dto.getUserAgent());
        request.setReferer(dto.getReferer());

        return repository.save(request);
    }
}
