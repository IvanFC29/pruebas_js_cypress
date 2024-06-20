/// <reference types="cypress" />

const { get } = require("lodash")

describe('Food App test Suite', () => {

    it('Verify URL',() =>  {  
        cy.visit("https://food-offer-frontend-m481emcsm-melrodriguez1133.vercel.app/empresa/empresa/RegistrarEmpresa")
        cy.url().should("include", "food")
        cy.url().should("eq", "https://food-offer-frontend-m481emcsm-melrodriguez1133.vercel.app/empresa/empresa/RegistrarEmpresa")
    })
    
    it('Verify login',() =>  {  
        cy.visit("https://food-offer-frontend-m481emcsm-melrodriguez1133.vercel.app/empresa/empresa/RegistrarEmpresa")
        cy.get("#empresa").type("David").should("have.value", "David")  
        cy.get("#tipoNegocio").type("Comida ").should("have.value", "Comida ")
        cy.get("#descripcion").type("Comida en descuento por fin de anio ven y conoce nuestros ambientes").should("have.value", "Comida en descuento por fin de anio ven y conoce nuestros ambientes")
        cy.get("#horariosAtencion").type("18:00-21:00").should("have.value", "18:00-21:00")
        cy.get("#diasAtencion").type("Viernes-Domingo").should("have.value", "Viernes-Domingo")
        cy.get("#celular").type("74374903").should("have.value", "74374903")
        cy.get("#telefono").type("4297109").should("have.value", "4297109")
        cy.get("#direccion").type("Calle Baptista entre La Paz y Tnte Arevalo").should("have.value", "Calle Baptista entre La Paz y Tnte Arevalo")
        cy.get("#correo").type("elBuenSabor@gmail.com").should("have.value", "elBuenSabor@gmail.com")
        cy.get("#password1").type("abc123").should("have.value", "abc123")
        cy.get("#password2").type("abc123").should("have.value", "abc123")
        cy.get(".sc-ksBlkl").click()
    })

    it('Verify register product',() =>  {  
        cy.visit("https://food-offer-frontend-m481emcsm-melrodriguez1133.vercel.app/empresa/productos-empresa/RegistroProducto")
        cy.get("#usuario").type("Hamburguesa").should("have.value", "Hamburguesa")
        cy.get("#descripcion").type("Hamburguesa en descuento por fin de anio").should("have.value", "Hamburguesa en descuento por fin de anio")
        cy.get('#producto').select('Comida')
        cy.get("#fechaVencimiento").type("15/12/2022").should("have.value", "15/12/2022")
        cy.get("#fechaElaboracion").type("15/12/2022").should("have.value", "15/12/2022")
        cy.get("#precio").type("15").should("have.value", "15")
        cy.get("#cantidadDisponible").type("20").should("have.value", "20")
        cy.get("#fechaLimite").type("15/12/2022").should("have.value", "15/12/2022")
        cy.get('#agregar-imag').click()
        cy.get('#agregar-imag').request('https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg')
    })

    xit('Verify Cancel registrion',() =>  {  
        cy.visit("https://food-offer-frontend-m481emcsm-melrodriguez1133.vercel.app/empresa/empresa/RegistrarEmpresa")
        cy.get("#empresa").type("El Buen Sabor").should("have.value", "El Buen Sabor")
        cy.get("#tipoNegocio").type("Comida ").should("have.value", "Comida ")
        cy.get("#descripcion").type("Comida en descuento por fin de anio ven y conoce nuestros ambientes").should("have.value", "Comida en descuento por fin de anio ven y conoce nuestros ambientes")
        cy.get("#horariosAtencion").type("18:00-21:00").should("have.value", "18:00-21:00")
        cy.get("#diasAtencion").type("Viernes-Domingo").should("have.value", "Viernes-Domingo")
        cy.get("#celular").type("74374903").should("have.value", "74374903")
        cy.get("#telefono").type("4297109").should("have.value", "4297109")
        cy.get("#direccion").type("Calle Baptista entre La Paz y Tnte Arevalo").should("have.value", "Calle Baptista entre La Paz y Tnte Arevalo")
        cy.get("#correo").type("elBuenSabor@gmail.com").should("have.value", "elBuenSabor@gmail.com")
        cy.get("#password1").type("abc123").should("have.value", "abc123")
        cy.get("#password2").type("abc123").should("have.value", "abc123")
        //cy.get("btn-success").click()
    })

})  