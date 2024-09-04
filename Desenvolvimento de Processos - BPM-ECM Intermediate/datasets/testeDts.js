function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dts = DatasetBuilder.newDataset();

    dts.addColumn("simbolo");
    dts.addColumn("nomeMoeda");

    dts.addRow(new Array("R$", "Real"));
    dts.addRow(new Array("US$", "Dólar Americano"));
    dts.addRow(new Array("€", "Euro"));

    return dts;
}
function onMobileSync(user) {

}