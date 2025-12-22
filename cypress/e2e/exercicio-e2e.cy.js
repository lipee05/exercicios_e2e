// <reference types="cypress" />
import pedidoCompleto from '../support/page_objects/pedido.page'
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produtos/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {


    cy.fixture('produtos').then(dados => {
        pedidoCompleto.buscarProdutos(dados[0].nomeProduto)
        pedidoCompleto.addProdutoCarrinho(
        dados[0].tamanho, 
        dados[0].cor, 
        dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    });
    cy.fixture('produtos').then(dados => {
        pedidoCompleto.buscarProdutos(dados[1].nomeProduto)
        pedidoCompleto.addProdutoCarrinho(
        dados[1].tamanho, 
        dados[1].cor, 
        dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    });    
    cy.fixture('produtos').then(dados => {
        pedidoCompleto.buscarProdutos(dados[2].nomeProduto)
        pedidoCompleto.addProdutoCarrinho(
        dados[2].tamanho, 
        dados[2].cor, 
        dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
    });
    cy.fixture('produtos').then(dados => {
        pedidoCompleto.buscarProdutos(dados[3].nomeProduto)
        pedidoCompleto.addProdutoCarrinho(
        dados[3].tamanho, 
        dados[3].cor, 
        dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)
        cy.get('.woocommerce-message > .button').click()
    });

    // Fazendo checkout
    
    pedidoCompleto.fazerCheckout(
        
    )



})

});