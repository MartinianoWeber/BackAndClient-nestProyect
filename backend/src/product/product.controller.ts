import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  HttpStatus,
  Param,
} from '@nestjs/common';

import { NotFoundException } from '@nestjs/common/exceptions';

import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // get para obtener todos los productos
  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }
  // post para crear productos nuevos
  @Post('/create') // POST /product/create
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const productCreated = await this.productService.createProduct(
      createProductDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Post created successfully',
      product: productCreated,
    });
  }
  // get para obtener un producto(Este iria con ID del producto)
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json(product);
  }

  // delete para eliminar

  @Delete('/:productID')
  async deleteProduct(@Res() res, @Param('productID') productID) {
    const productDeleted = await this.productService.deleteProduct(productID);
    console.log(productDeleted);
    if (!productDeleted) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product deleted successfully',
      product: productDeleted,
    });
  }
  // Put para enviar un producto actualizado
  @Put('/:productID')
  async updateProduct(
    @Res() res,
    @Param('productID') productID,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const productUpdated = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!productUpdated) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated successfully',
      product: productUpdated,
    });
  }
}
