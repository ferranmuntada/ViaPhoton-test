"use strict";
const textArea = document.getElementById('textArea');
const submit = document.getElementById('calculate');
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", () => {
    console.log('textArea', textArea.value);
});
