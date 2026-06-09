//data ransfer object
//será um molde 

//export class CriarProduto {
//    nome: string;
//    preco: number;
//}

import { IsNotEmpty,IsNumber, IsString } from "class-validator";

export class CriarProduto {
    @IsString()
    @IsNotEmpty()
    
    @IsNumber()
    preco: number;
}