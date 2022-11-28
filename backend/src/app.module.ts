import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      // conexion a MongoDB ATLAS
      'mongodb+srv://martiniano:44242921@cluster0.iut4kr8.mongodb.net/products?retryWrites=true&w=majority',
      {
        // analicis de URL para evitar errores
        useNewUrlParser: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
