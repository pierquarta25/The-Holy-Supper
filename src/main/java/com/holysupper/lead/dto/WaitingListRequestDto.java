package com.holysupper.lead.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * Data Transfer Object (DTO) per la richiesta di iscrizione alla lista di attesa.
 * Contiene le regole di validazione.
 */
public class WaitingListRequestDto {

    @NotBlank(message = "Il nome completo è obbligatorio")
    @Size(min = 2, max = 80, message = "Il nome completo deve essere tra 2 e 80 caratteri")
    private String fullName;

    @NotBlank(message = "La chiesa è obbligatoria")
    @Size(min = 2, max = 120, message = "Il nome della chiesa deve essere tra 2 e 120 caratteri")
    private String church;

    @NotBlank(message = "Il ruolo è obbligatorio")
    @Size(min = 2, max = 80, message = "Il ruolo deve essere tra 2 e 80 caratteri")
    private String role;

    @NotBlank(message = "La nazione è obbligatoria")
    @Size(min = 2, max = 60, message = "La nazione deve essere tra 2 e 60 caratteri")
    private String country;

    @NotBlank(message = "L'email è obbligatoria")
    @Email(message = "Formato email non valido")
    @Size(max = 255, message = "L'email non può superare 255 caratteri")
    private String email;

    @Size(max = 40, message = "Il telefono non può superare 40 caratteri")
    private String phone;

    @Size(max = 40, message = "La quantità non può superare 40 caratteri")
    private String quantity;

    @AssertTrue(message = "Il consenso è obbligatorio")
    private boolean consent;

    @NotBlank(message = "La lingua (locale) è obbligatoria")
    private String locale;

    private String userAgent;

    private String referer;

    public WaitingListRequestDto() {
    }

    // Getters e Setters

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getChurch() {
        return church;
    }

    public void setChurch(String church) {
        this.church = church;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public boolean isConsent() {
        return consent;
    }

    public void setConsent(boolean consent) {
        this.consent = consent;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public String getReferer() {
        return referer;
    }

    public void setReferer(String referer) {
        this.referer = referer;
    }
}
