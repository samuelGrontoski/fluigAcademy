function validateForm(form) {
    var msg = "";
    
    /* Exemplos de input */
	if(form.getValue("exemploInputText") == "") {
        msg += i18n.translate("validaTexto");
    }
    if(form.getValue("exemploInputEmail") == "") {
        msg += i18n.translate("validaEmail");
    }
    if(form.getValue("exemploInputSenha") == "") {
        msg += i18n.translate("validaSenha");
    }
    if(form.getValue("exemploInputData") == "") {
        msg += i18n.translate("validaData");
    }
    if(form.getValue("exemploInputRadio") == "") {
        msg += i18n.translate("validaRadio");
    }
    if(form.getValue("checkbox1") != "on" && form.getValue("checkbox2") != "on" && form.getValue("checkbox3") != "on" && form.getValue("checkbox4") != "on") {
        msg += i18n.translate("validaCheckbox");
    }
    
    /* Endereço */
    if(form.getValue("cep") == "") {
        msg += i18n.translate("validaCep");
    }
    if(form.getValue("logradouro") == "") {
        msg += i18n.translate("validaLogradouro");
    }
    if(form.getValue("numero") == "") {
        msg += i18n.translate("validaNumero");
    }
    if(form.getValue("cidade") == "") {
        msg += i18n.translate("validaCidade");
    }
    if(form.getValue("estado") == "") {
        msg += i18n.translate("validaEstado");
    }
    
    /* Valores numéricos */
    if(form.getValue("Valor") == "") {
        msg += i18n.translate("validaValor");
    }

    /* Mensagem de aviso de campos obrigatórios não preenchidos */
    if(msg != "") {
        throw msg;
    }
}