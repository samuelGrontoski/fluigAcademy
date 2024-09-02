function validateForm(form) {
    var msg = "";
    
    /* Exemplos de input */
	if(form.getValue("exemploInputText") == "") {
        msg += "Campo Entrada de texto é obrigatório.";
    }
    if(form.getValue("exemploInputEmail") == "") {
        msg += "Campo Entrada de email é obrigatório.";
    }
    if(form.getValue("exemploInputSenha") == "") {
        msg += "Campo Entrada de senha é obrigatório.";
    }
    if(form.getValue("exemploInputData") == "") {
        msg += "Campo Entrada de data é obrigatório.";
    }
    if(form.getValue("exemploInputRadio") == "") {
        msg += "Campo Entrada tipo radio não foi selecionado.";
    }
    if(form.getValue("checkbox1") != "on" && form.getValue("checkbox2") != "on" && form.getValue("checkbox3") != "on" && form.getValue("checkbox4") != "on") {
        msg += "Campo Entrada tipo checkbox não foi selecionado.";
    }
    
    /* Endereço */
    if(form.getValue("cep") == "") {
        msg += "Campo CEP é obrigatório.";
    }
    if(form.getValue("logradouro") == "") {
        msg += "Campo Logradouro é obrigatório.";
    }
    if(form.getValue("numero") == "") {
        msg += "Campo Número é obrigatório.";
    }
    if(form.getValue("cidade") == "") {
        msg += "Campo Cidade é obrigatório.";
    }
    if(form.getValue("estado") == "") {
        msg += "Campo Estado é obrigatório.";
    }
    
    /* Valores numéricos */
    if(form.getValue("Valor") == "") {
        msg += "Campo Valor é obrigatório.";
    }

    /* Mensagem de aviso de campos obrigatórios não preenchidos */
    if(msg != "") {
        throw msg;
    }
}