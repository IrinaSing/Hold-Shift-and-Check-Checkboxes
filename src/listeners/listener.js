import { handleCheck } from "../handlers/handle-check.js";

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
