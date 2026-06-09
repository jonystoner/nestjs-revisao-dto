import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
    listar():string {
        return "produtos vindos do service"
    }

    
}
