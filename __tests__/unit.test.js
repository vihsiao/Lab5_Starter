// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number', () => {
  expect(isPhoneNumber("899-242-8291")).toBe(true);
});

test('valid phone number #2', () => {
  expect(isPhoneNumber("222-242-8291")).toBe(true);
});

test('invalid phone number, words', () => {
  expect(isPhoneNumber("We do be coding")).toBe(false);
});

test('invalid phone number, format', () => {
  expect(isPhoneNumber("2-33-2024")).toBe(false);
});

// Email tests:
test('valid email', () => {
  expect(isEmail("trying@gmail.com")).toBe(true);
});

test('valid email ucsd', () => {
  expect(isEmail("trying@ucsd.edu")).toBe(true);
});

test('invalid email, no @', () => {
  expect(isEmail("tryinggmail.com")).toBe(false);
});

test('valid email, spaces', () => {
  expect(isEmail("tryi ng. @ gmail.c om")).toBe(false);
});

// Strong Password

test('strong password', () => {
  expect(isStrongPassword("ooooop1ps")).toBe(true);
});

test('strong password', () => {
  expect(isStrongPassword("HeALAD")).toBe(true);
});

// Strong Password - FAILING

test('not enough characters', () => {
  expect(isStrongPassword("123")).toBe(false);
});

test('invalid char', () => {
  expect(isStrongPassword("&2983r43*")).toBe(false);
});

// Date Tests - PASSING
test('yyear and month are one digit', () => {
  expect(isDate("1/1/2001")).toBe(true);
});

test('year and month are two digits', () => {
  expect(isDate("12/25/2024")).toBe(true);
});

// Date Tests - FAILING
test('empty string', () => {
  expect(isDate("")).toBe(false);
});

test('wrong format', () => {
  expect(isDate("12/250/2024")).toBe(false);
});

// Hex Color Tests - PASSING
test('3 character hex color', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('6 character hex color', () => {
  expect(isHexColor("#F8F8F8")).toBe(true);
});

// Hex Color Tests - FAILING
test('not a 3 or 6 character hex color', () => {
  expect(isHexColor("#F8A3")).toBe(false);
});
test('invalid hex color, word', () => {
  expect(isHexColor("whomst")).toBe(false);
});