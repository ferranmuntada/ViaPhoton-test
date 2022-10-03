const textArea = document.getElementById('textArea') as HTMLTextAreaElement;
const submit = document.getElementById('calculate');

submit?.addEventListener("click", () => {
  console.log('textArea', textArea.value)
});
