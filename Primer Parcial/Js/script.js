function calcularFactura() {

    let articulo = document.getElementById("articulo").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    let subtotal = precio * cantidad;
    let iva = subtotal * 0.15; // Suponiendo un IVA del 15%
    let bruto = subtotal + iva;

    let descuento = 0;
    if (bruto > 50) {
    descuento = bruto * 0.05; // Descuento del 5% para facturas mayores a 50
    }

    let total = bruto - descuento;

    document.getElementById("resultado").innerHTML = "Artículo: " + articulo + "<br>" +
    "Subtotal: $" + subtotal.toFixed(2) + "<br>" +
    "IVA: $" + iva.toFixed(2) + "<br>" +
    "Descuento: $" + descuento.toFixed(2) + "<br>" +
    "Total a pagar: $" + total.toFixed(2);
}