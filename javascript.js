document.addEventListener("DOMContentLoaded", () =>
     {
 const textarea = document.getElementById('textarea');
     const total = document.getElementById('total');
    const remaining = document.getElementById('remaining');

         const maxLength = parseInt(textarea.getAttribute('maxlength'));
  textarea.addEventListener('input', () => 
    {
        const textLength = textarea.value.length;
         
             total.textContent = textLength;
        remaining.textContent = maxLength - textLength;
    });
});