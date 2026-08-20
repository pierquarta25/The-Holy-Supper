package com.holysupper.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller SPA: intercetta tutte le richieste che non corrispondono
 * a risorse statiche e le redirige a index.html per far gestire
 * il routing ad Angular.
 */
@Controller
public class SpaController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Se è un 404, redirigi a index.html (Angular gestirà la rotta)
        return "forward:/index.html";
    }
}
