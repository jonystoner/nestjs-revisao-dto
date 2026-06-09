import { Controller, Get,Post,Body } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
//importando molde dto para criação de produtos 
import { CriarProduto } from './dto/criar-produto.dto';

@Controller('produtos')
export class ProdutosController {
      constructor(private readonly produtosService: ProdutosService) {}
    @Get()
    listar(): string {
        return this.produtosService.listar();
    }

    @Post()
    //criar(){
    //    return "cadastro sucesso "
    //}

    criar(@Body() produto: CriarProduto) {
        return produto
    }  


}


