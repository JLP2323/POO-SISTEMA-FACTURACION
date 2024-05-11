class SaleDetail {
    static _line = 0;

    constructor(product, quantity) {
        SaleDetail._line++;
        this.__id = SaleDetail._line;
        this.product = product;
        this.preci = product.preci;
        this.quantity = quantity;
    }

    get id() {
        // Getter para obtener el valor del límite de crédito del cliente VIP
        return this.__id;
    }

    toString() {
        // Método especial para representar la clase Cliente como una cadena
        return `${this.id} ${this.product.descrip} ${this.preci} ${this.quantity}`;
    }
}
