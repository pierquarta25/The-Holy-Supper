package com.holysupper.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.HashMap;
import java.util.Map;

/**
 * Gestore globale delle eccezioni.
 * Cattura gli errori di validazione e altri errori generali per restituire risposte JSON pulite.
 * Esclude NoResourceFoundException per permettere al SpaController di gestire le rotte Angular.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Gestisce gli errori di validazione (es. campi vuoti, formati errati).
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.put(error.getField(), error.getDefaultMessage());
        }
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    /**
     * Gestisce qualsiasi altra eccezione generica, ESCLUDENDO le NoResourceFoundException
     * che devono essere gestite dal SpaController per il routing Angular.
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) throws Exception {
        if (ex instanceof NoResourceFoundException) {
            throw ex; // Rilancia per far gestire al SpaController (ErrorController)
        }
        return new ResponseEntity<>("Si è verificato un errore interno: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
