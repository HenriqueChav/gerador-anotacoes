// ---------- ADD AND REMOVE INPUT SCRIPT ----------

const btnAddRow = document.querySelector('[data-button-add]');
const btnRemoveRow = document.querySelector('[data-button-remove]');
const formTable = document.querySelector('[data-table-body]');

function addRow() {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" placeholder="Data"></td>
        <td><input type="text" placeholder="Horário"></td>
        <td><textarea rows="8" placeholder="Descrição aqui..."></textarea></td>
    `;
    formTable.appendChild(newRow);
}

function removeRow() {
    const lastRow = formTable.lastChild;
    formTable.removeChild(lastRow);
}

btnAddRow.addEventListener('click', addRow);
btnRemoveRow.addEventListener('click', removeRow);
