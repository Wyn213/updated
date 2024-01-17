"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

var logID = document.getElementById("logs")

document.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    document.getElementById('frame').contentWindow.document.write("<h1 style=\"background-color: white;\">Failed to register Service worker | " + err.toString() + " | <button onclick='location.reload()'>Return</button></h1>");
    throw err;
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  document.getElementById("outputLink").innerHTML = __uv$config.prefix + __uv$config.encodeUrl(url);
});