import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';
import { displayAlert } from './alert.js';

const uploadInput = document.getElementById('xlsFile');
const uploadButton = document.getElementById('buttonUpload');
const jsonContent = document.getElementById('jsonData');
const jsonView = document.getElementById('jsonView');

let selectedFile;

uploadInput.addEventListener('change', (e) => {

    selectedFile = e.target.files[0];
});

uploadButton.addEventListener('click', () => {

    let status = 'success';
    let message = 'The file has been successfully converted';

    try {

        let fileReader = new FileReader();
    
        fileReader.onload = (e) => {
    
            let data = e.target.result;
            let workbook = XLSX.read(data, {type: 'binary'});
    
            workbook.SheetNames.forEach(sheet => {
    
                let row = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                let jsonObject = JSON.stringify(row);
    
                jsonContent.innerHTML = jsonObject;
                jsonView.style.visibility = 'visible';
            });
        };
    
        fileReader.readAsBinaryString(selectedFile);
    
    } catch (e) {

        status = 'warning';
        message = 'No file selected';
    } finally {

        displayAlert(status, message);
    }

});