const computer = {
    toString() {
        console.log(`Seu computador é um ${this.type}. Possui um CPU de ${this.cpu}, ${this.ram} de RAM e ${this.hdd} de armazenamento interno.`)
    }
}

function createComputer(ram, hdd, cpu, type) {
    if ( type === 'Gamer' ) {
        return Object.create(computer, {
            ram: {
                get: function() {
                    return `${ram} GB`
                }
            },
            hdd: {
                get: function() {
                    return `${hdd} GB`
                }
            },
            cpu: {
                get: function() {
                    return `${cpu} GHz`
                }
            },
            type: {
                get: function() {
                    return type
                }
            }
        });
    } else if ( type === 'pessoal' ) {
        return Object.create(computer, {
            ram: {
                get: function() {
                    return `${ram} GB`
                }
            },
            hdd: {
                get: function() {
                    return `${hdd} GB`
                }
            },
            cpu: {
                get: function() {
                    return `${cpu} GHz`
                }
            },
            type: {
                get: function() {
                    return type
                }
            }
        });
    } else {
        console.log('Tipo inválido!')
    }
}

const pc = createComputer('16', '500', '3.2', 'Gamer');
pc.toString()

/**
 * saída:
 * Seu computador é um server. 
 * Possui um CPU de 3.2 GHz, 8 GB de RAM e 
 * 500 GB de armazenamento interno.
 */