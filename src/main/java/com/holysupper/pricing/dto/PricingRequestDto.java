package com.holysupper.pricing.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * Data Transfer Object (DTO) per la richiesta di preventivo.
 * Contiene le regole di validazione.
 */
public class PricingRequestDto {

    @NotBlank(message = "Il nome della chiesa è obbligatorio")
    @Size(min = 2, max = 200, message = "Il nome della chiesa deve essere tra 2 e 200 caratteri")
    private String churchName;

    @NotBlank(message = "La nazione è obbligatoria")
    @Size(min = 2, max = 60, message = "La nazione deve essere tra 2 e 60 caratteri")
    private String country;

    @NotBlank(message = "Il nome è obbligatorio")
    @Size(min = 2, max = 60, message = "Il nome deve essere tra 2 e 60 caratteri")
    private String firstName;

    @NotBlank(message = "Il cognome è obbligatorio")
    @Size(min = 2, max = 60, message = "Il cognome deve essere tra 2 e 60 caratteri")
    private String lastName;

    @NotBlank(message = "L'email è obbligatoria")
    @Email(message = "Formato email non valido")
    @Size(max = 255, message = "L'email non può superare 255 caratteri")
    private String email;

    @Size(max = 40, message = "Il telefono non può superare 40 caratteri")
    private String phone;

    @Size(max = 40, message = "La dimensione della congregazione non può superare 40 caratteri")
    private String congregationSize;

    @Size(max = 40, message = "L'affluenza non può superare 40 caratteri")
    private String communionAttendance;

    @Size(max = 40, message = "La quantità prevista non può superare 40 caratteri")
    private String expectedQuantity;

    @Size(max = 80, message = "Il prodotto preferito non può superare 80 caratteri")
    private String preferredProduct;

    @Size(max = 2000, message = "Il messaggio non può superare 2000 caratteri")
    private String message;

    private boolean notifyWhenOrderingOpens;

    @NotBlank(message = "La lingua è obbligatoria")
    private String language;

    private String userAgent;

    private String referer;

    public PricingRequestDto() {
    }

    // Getters e Setters

    public String getChurchName() {
        return churchName;
    }

    public void setChurchName(String churchName) {
        this.churchName = churchName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public String getCongregationSize() {
        return congregationSize;
    }

    public void setCongregationSize(String congregationSize) {
        this.congregationSize = congregationSize;
    }

    public String getCommunionAttendance() {
        return communionAttendance;
    }

    public void setCommunionAttendance(String communionAttendance) {
        this.communionAttendance = communionAttendance;
    }

    public String getExpectedQuantity() {
        return expectedQuantity;
    }

    public void setExpectedQuantity(String expectedQuantity) {
        this.expectedQuantity = expectedQuantity;
    }

    public String getPreferredProduct() {
        return preferredProduct;
    }

    public void setPreferredProduct(String preferredProduct) {
        this.preferredProduct = preferredProduct;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isNotifyWhenOrderingOpens() {
        return notifyWhenOrderingOpens;
    }

    public void setNotifyWhenOrderingOpens(boolean notifyWhenOrderingOpens) {
        this.notifyWhenOrderingOpens = notifyWhenOrderingOpens;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
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
