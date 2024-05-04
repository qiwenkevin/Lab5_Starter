// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests 
test('correct format 1', () => {
  let phoneNumber = "(555) 555-5555";
  expect(isPhoneNumber(phoneNumber)).toBe(true);
});

test('correct format 2', () => {
  let phoneNumber = "555-555-5555";
  expect(isPhoneNumber(phoneNumber)).toBe(true);
});

test('wrong format 3', () => {
  let phoneNumber = "1234678889";
  expect(isPhoneNumber(phoneNumber)).toBe(false);
});

test('wrong format 4', () => {
  let phoneNumber = "1111";
  expect(isPhoneNumber(phoneNumber)).toBe(false);
});

// isEmail tests
test('correct format 1', () => {
  let email = "cake@cake.com";
  expect(isEmail(email)).toBe(true);
});

test('correct format 2', () => {
  let email = "cake@cakaka.ca";
  expect(isEmail(email)).toBe(true);
});

test('wrong format 3', () => {
  let email = "cake@cake.cacacaca";
  expect(isEmail(email)).toBe(false);
});

test('wrong format 4', () => {
  let email = "cakecake.com";
  expect(isEmail(email)).toBe(false);
});

// isStrongPassword tests
test('correct format 1', () => {
  let password = "a1432423423";
  expect(isStrongPassword(password)).toBe(true);
});

test('correct format 2', () => {
  let password = "abbb";
  expect(isStrongPassword(password)).toBe(true);
});

test('wrong format 3', () => {
  let password = "123456789";
  expect(isStrongPassword(password)).toBe(false);
});

test('wrong format 4', () => {
  let password = "ab";
  expect(isStrongPassword(password)).toBe(false);
});

// isDate tests
test('correct format 1', () => {
  let date = "12/12/2020";
  expect(isDate(date)).toBe(true);
});

test('correct format 2', () => {
  let date = "1/1/2020";
  expect(isDate(date)).toBe(true);
});

test('wrong format 3', () => {
  let date = "12/12/20";
  expect(isDate(date)).toBe(false);
});

test('wrong format 4', () => {
  let date = "12/12/202";
  expect(isDate(date)).toBe(false);
});

// isHexColor tests
test('correct format 1', () => {
  let color = "#fff";
  expect(isHexColor(color)).toBe(true);
});

test('correct format 2', () => {
  let color = "#ffffff";
  expect(isHexColor(color)).toBe(true);
});

test('wrong format 3', () => {
  let color = "#ff";
  expect(isHexColor(color)).toBe(false);
});

test('wrong format 4', () => {
  let color = "#fffff";
  expect(isHexColor(color)).toBe(false);
});