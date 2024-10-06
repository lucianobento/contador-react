// src/Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
//import '@testing-library/jest-dom/extend-expect'; // Importa matchers como toBeInTheDocument()
import '@testing-library/jest-dom';
import Counter from "./Counter"; // Importa o componente Counter para ser testado

/**
 * Teste básico para verificar a renderização inicial do valor do contador.
 * O contador deve começar com o valor 0.
 */
test("deve exibir o valor inicial do contador como 0", () => {
  render(<Counter />); // Renderiza o componente Counter
  const counterValue = screen.getByText("0"); // Verifica se o valor inicial do contador é 0
  expect(counterValue).toBeInTheDocument(); // Verifica se o valor 0 está presente no DOM
});

/**
 * Testa se o botão "Incrementar" aumenta o valor do contador.
 */
test("deve incrementar o valor do contador ao clicar no botão 'Incrementar'", () => {
  render(<Counter />); // Renderiza o componente Counter
  const incrementButton = screen.getByText("Incrementar"); // Seleciona o botão de incrementar
  fireEvent.click(incrementButton); // Simula um clique no botão de incrementar
  const counterValue = screen.getByText("1"); // Verifica se o valor do contador foi incrementado para 1
  expect(counterValue).toBeInTheDocument(); // Verifica se o valor 1 está presente no DOM
});

/**
 * Testa se o botão "Decrementar" diminui o valor do contador.
 */
test("deve decrementar o valor do contador ao clicar no botão 'Decrementar'", () => {
  render(<Counter />); // Renderiza o componente Counter
  const decrementButton = screen.getByText("Decrementar"); // Seleciona o botão de decrementar
  fireEvent.click(decrementButton); // Simula um clique no botão de decrementar
  const counterValue = screen.getByText("-1"); // Verifica se o valor do contador foi decrementado para -1
  expect(counterValue).toBeInTheDocument(); // Verifica se o valor -1 está presente no DOM
});

/**
 * Testa se o botão "Incrementar" pode ser clicado múltiplas vezes para aumentar o valor.
 */
test("deve incrementar o valor do contador ao clicar várias vezes no botão 'Incrementar'", () => {
  render(<Counter />); // Renderiza o componente Counter
  const incrementButton = screen.getByText("Incrementar"); // Seleciona o botão de incrementar

  // Simula múltiplos cliques no botão de incrementar
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  const counterValue = screen.getByText("3"); // Verifica se o valor do contador foi incrementado para 3
  expect(counterValue).toBeInTheDocument(); // Verifica se o valor 3 está presente no DOM
});

/**
 * Testa o comportamento ao clicar nos botões de incrementar e depois decrementar.
 */
test("deve incrementar e depois decrementar o valor do contador", () => {
  render(<Counter />); // Renderiza o componente Counter
  const incrementButton = screen.getByText("Incrementar"); // Seleciona o botão de incrementar
  const decrementButton = screen.getByText("Decrementar"); // Seleciona o botão de decrementar

  // Simula clique no botão de incrementar e depois no de decrementar
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);

  const counterValue = screen.getByText("0"); // Verifica se o valor do contador voltou para 0
  expect(counterValue).toBeInTheDocument(); // Verifica se o valor 0 está presente no DOM
});
