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
function useNeverType(): never {
    'retua'
}