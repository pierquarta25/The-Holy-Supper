package com.holysupper.pricing;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Entità che rappresenta una richiesta di preventivo nella tabella 'pricing_requests'.
 */
@Entity
@Table(name = "pricing_requests")
public class PricingRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "church_name", nullable = false, length = 200)
    private String churchName;

    @Column(nullable = false, length = 100)
    private String country;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(length = 40)
    private String phone;

    @Column(name = "congregation_size", length = 100)
    private String congregationSize;

    @Column(name = "communion_attendance", length = 100)
    private String communionAttendance;

    @Column(name = "expected_quantity", length = 100)
    private String expectedQuantity;

    @Column(name = "preferred_product", length = 100)
    private String preferredProduct;

    @Column(length = 2000)
    private String message;

    @Column(name = "notify_when_ordering_opens")
    private Boolean notifyWhenOrderingOpens = false;

    @Column(length = 5)
    private String language = "en";

    @Column(length = 20)
    private String status = "New";

    @Column(name = "user_agent", length = 500)
    private String userAgent;

    @Column(length = 500)
    private String referer;

    public PricingRequest() {
    }

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getters e Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

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

    public Boolean getNotifyWhenOrderingOpens() {
        return notifyWhenOrderingOpens;
    }

    public void setNotifyWhenOrderingOpens(Boolean notifyWhenOrderingOpens) {
        this.notifyWhenOrderingOpens = notifyWhenOrderingOpens;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
