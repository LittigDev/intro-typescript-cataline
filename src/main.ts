//Tipo String -> Qualquer valor dentro de ('',"",``)
let message: string = 'Cataline';
console.log(message);

//Tipo númerico -> Permite qualquer valor númerico
let value: number = 10;
console.log(value);

//Tipo boolean -> Permite somente true ou false;
let isOpen: boolean = false
console.log(isOpen);

//Tipo Any -> Permite qualquer tipo;
let param: any = 'param';
param = 10;
param = false;
console.log(param);

//Tipo void -> Geralmente utilizado em funções sem retorno
function howToUseVoid(): void {
    console.log('Essa função não possuí return');
}
howToUseVoid();

//Tipo never -> Utilizado para tratar funções de looping infinito e exceções (Raramente utilizado);
function error(): never {
    throw new Error('Mariana error');
}

// Tipo Array -> Precisa especificar conteúdo da array;
let items: Array<number>;
items = [1,2,3]

// Tipo tuple -> Array em que já se tem o conhecimento de seu comprimento;
let itemsTuple: [number, string, boolean];
itemsTuple = [1, 'Cataline', false];

// Tipo Enum -> Cria-se um conjunto de chave e valor
enum Colors {
    white = '#fff',
    black = '#000'
};
let color: Colors = Colors.white;
console.log(color);

// Tipo Union -> União de tipos
let age: number | string;
age = 20;
age = 'vinte';

function showPet(pet: 'dog' | 'cat' | 'zebra')  {
    console.log(pet)
};

showPet('zebra');
