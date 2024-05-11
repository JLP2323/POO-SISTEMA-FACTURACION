class Client {
    constructor(first_name = "Consumidor", last_name = "Final", dni = "9999999999") {
        this.first_name = first_name;
        this.last_name = last_name;
        this.__dni = dni;
    }

    get dni() {
        return this.__dni;
    }

    set dni(value) {
        if (value.length === 10 || value.length === 13) {
            this.__dni = value;
        } else {
            this.__dni = "9999999999";
        }
    }

    toString() {
        return `Cliente: ${this.first_name} ${this.last_name}`;
    }

    fullName() {
        return this.first_name + ' ' + this.last_name;
    }

    show() {
        console.log('   Nombres    Dni');
        console.log(`${this.fullName()}  ${this.dni}`);
    }
}

class RegularClient extends Client {
    constructor(first_name = "Cliente", last_name = "Final", dni = "9999999999", card = false) {
        super(first_name, last_name, dni);
        this.__discount = card ? 0.10 : 0;
    }

    get discount() {
        return this.__discount;
    }

    toString() {
        return `Client:${this.first_name} ${this.last_name} Descuento:${this.discount}`;
    }

    show() {
        console.log(`\x1b[1m\x1b[4m\x1b[97mCliente Minorista ⬇️ \x1b[0m  \x1b[92m \n\n DNI \x1b[97m=> \x1b[0m ${this.dni} \n\x1b[92m Nombres completos \x1b[97m=> \x1b[0m ${this.first_name}\n\x1b[92m Apellidos completos \x1b[97m=> \x1b[0m${this.last_name}\n\x1b[92m Descuento por ser cliente regular \x1b[97m=> \x1b[0m${this.discount}`);
    }
    
    getJson() {
        return {"dni": this.dni, "nombre": this.first_name, "apellido": this.last_name, "valor": this.discount};
    }
}

class VipClient extends Client {
    constructor(first_name = "Consumidor", last_name = "Final", dni = "9999999999") {
        super(first_name, last_name, dni);
        this.__limit = 10000;
    }

    get limit() {
        return this.__limit;
    }

    set limit(value) {
        this.__limit = (value < 10000 || value > 20000) ? 10000 : value;
    }

    toString() {
        return `Cliente:${this.first_name} ${this.last_name} Cupo: ${this.limit}`;
    }

    show() {
        console.log(`\x1b[1m\x1b[4m\x1b[97mCliente VIP ⬇️ \x1b[0m \x1b[92m\n\n DNI \x1b[97m=> \x1b[0m ${this.dni} \n\x1b[92m Nombres completos \x1b[97m=> \x1b[0m ${this.first_name}\n\x1b[92m Apellidos completos \x1b[97m=> \x1b[0m${this.last_name}\n\x1b[92m Cupo del crédito \x1b[97m=> \x1b[0m${this.limit}`);
    }
    
    getJson() {
        return {"dni": this.dni, "nombre": this.first_name, "apellido": this.last_name, "valor": this.limit};
    }
}
