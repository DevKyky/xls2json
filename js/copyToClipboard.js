
const jsonContent = document.getElementById('jsonData');
const jsonView = document.getElementById('jsonView');
const buttonCopy = document.getElementById('copyClipboard');

jsonView.style.visibility = 'hidden';

buttonCopy.addEventListener('click', () => {
   
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(jsonContent.textContent);
    
    return Promise.reject('The clipboard API is not available');
});