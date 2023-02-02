function createPDF() {

    if(document.getElementById("name").value == "" || document.getElementById("data_nascimento"). value == "") {
        alert("Por favor preencha os campos obrigatórios!");
    }

    else {
        var doc = new jsPDF();

        doc.text(document.getElementById("name").value, 10, 10);
        doc.text(document.getElementById("data_nascimento").value, 25, 25);

        doc.save("output.pdf");
    }

}