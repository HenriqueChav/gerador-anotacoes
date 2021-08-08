// ---------- PDFMAKE SCRIPT ----------

const btnCreatePdf = document.querySelector('[data-button-create-pdf]');

function createPdf() {

    const name = document.querySelector("[data-input-name]").value;
    const date = document.querySelector("[data-input-date]").value;
    const tableRows = formTable.children;

    const docDefinition = {
        content: [
            {text: "Anotações\n\n", style: "titulo"},
            {text: [{text: "Nome: ", style: "campo"}, name]},
            {text: [{text: "Data de Nascimento: ", style: "campo"}, date]},
            {
                table: {
                    headerRows: 1,
                    widths: ["25%", "25%", "50%"],
                    body: [
                        [{text: "Data", style: "tblTitulo"}, {text: "Hora", style: "tblTitulo"}, {text: "Descrição", style: "tblTitulo"}]
                    ]
                }
            }
        ],

        defaultStyle: {
            fontSize: 12,
            lineHeight: 1.5
        },

        styles: {
            titulo: {
                fontSize: 20,
                bold: true,
                alignment: "center",
                color: "green"
            },
            campo: {
                fontSize: 13,
                bold: true
            },
            tblTitulo: {
                fontSize: 13,
                bold: true,
                alignment: "center"
            }
        }
    };

    const tableBody = docDefinition.content[3].table.body;

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i].children;

        const inputArray = [];
        for (let j = 0; j < row.length; j++) {
            const data = row[j];
            const input = data.firstChild;
            inputArray.push(input.value);
        }

        tableBody.push(inputArray);

    }

    pdfMake.createPdf(docDefinition).open();

};

btnCreatePdf.addEventListener('click', createPdf);
