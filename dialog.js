'use strict';

/**
 * Utility functions
 * OnEvent
 * getElement (by id)
 * select
 * selectAll
 * print
 * sleep
 * randomNumber
 * filterArray
 * create
 */

// Add event listener
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

// Select HTML element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get a (node) list of HTML elements as array
function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// Print
function print(arg) {
  console.log(arg);
}

// Sleep
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Generate random number between - and including - 'min' and 'max'
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Filter array
function filterArray(array, callback) {
  return array.filter(callback);
}

// Create an HTML element
function create(element, parent = document) {
  return parent.createElement(element);
}

// Main code
const getInTouchButton = select('header nav button');
const formContainer = select('.form-container');
const formName = select('#name');
const formEmail = select('#email');
const formMessage = select('#message');
const sendButton = select('#send-button');

function showForm() {
  formContainer.classList.add('visible');
}

onEvent('click', getInTouchButton, () => {
  showForm();
});

function isValid(inputValue) {}

onEvent('keyup', formName, () => {
  if (formName.value.length > 0) {
    formName.classList.add('valid');
    print('valid');
  } else {
    formName.classList.remove('valid');
    print('invalid');
  }
});

function clearForm() {
  formName.value = '';
}

onEvent('keyup', formContainer);
