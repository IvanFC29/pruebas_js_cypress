/// <reference types="cypress" />

describe('Only Offers Test Suite', () => {

	const enlace='https://onlyofers.vercel.app/nuevacuenta'
      
    //Test Case: Verificar que acepte el nombre cuando tiene 10 caracteres
    it('Verify range char Name', () => {
        cy.visit(enlace)

        let nombre = Cypress._.repeat('Juan Ronal', 1)
        let permitido_max = nombre.substring(0, 20)
        let permitido_min = nombre.substring(0, 3)
        
        cy.log(`Nombre tiene una longitud de: ${nombre.length}`)
        cy.log(`El rango permitido es: ${permitido_min.length} y ${permitido_max.length}`)

        cy.get("#nombre").type(nombre)
        cy.get("#apellido").type(" ")
    })
    

     //Prueba
    xit('Verify URL', () => {
        cy.visit(enlace)

        cy.url().should('eq', enlace)
    })


    //Test Case: Verificar que se registre un comprador al introducir datos validos
    xit('Verify send form', () => {
    	cy.visit(enlace)

    	cy.get('form').submit()
    	cy.get('#nombre').type('Juan')
    	cy.get('#apellido').type('Perez')
    	cy.get('input[type="email"]').type('juanPI2@gmail.com')
    	cy.get('#contrasena').type('jp123456')
    	cy.get('#repetir_contrasena').type('jp123456')
    	cy.get('input[type="submit"]').click()
    })

    //Test Case: Verificar que aparezca un modal de confirmacion al hacer clic en el oton cancelar
    xit('Verify cancel form', () => {
    	cy.visit(enlace)

    	cy.get('form').submit()
    	cy.get('#nombre').type('Juan')
    	cy.get('#apellido').type('Perez')
    	cy.get('input[type="email"]').type('juanPI2@gmail.com')
    	cy.get('#contrasena').type('jp123456')
    	cy.get('#repetir_contrasena').type('jp123456')
    	cy.get('button').click()
    })


    //Test Case: Verificar que el campo nombre no permita caracteres menores a 3
    xit('Verify min char Name', () => {
        cy.visit(enlace)

        let nombre = Cypress._.repeat('A', 2)
        let permitido = nombre.substring(0, 3)
        
        cy.log(`Nombre tiene una longitud de: ${nombre.length}`)
        cy.log(`La longitud permitida es: ${permitido.length}`)

        cy.get("#nombre").type(nombre)
        cy.get("#apellido").type(" ")
    })

    

    //Test Case: Verificar que el campo nombre no permita caracteres mayores a 20
    xit('Verify max char Name', () => {
        cy.visit(enlace)

        let nombre = Cypress._.repeat('Juan', 6)
        let permitido = nombre.substring(0, 20)
        
        cy.log(`Nombre tiene una longitud de: ${nombre.length}`)
        cy.log(`La longitud permitida es: ${permitido.length}`)

        cy.get("#nombre").type(nombre)
        cy.get("#apellido").type(" ")
    })

})