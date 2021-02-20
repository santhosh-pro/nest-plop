import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
/* PLOP_INJECT_IMPORT */
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            /* PLOP_INJECT_ENTITY */
Product,
        ])
    ],
    controllers: [],
    providers: [
        /* PLOP_INJECT_MODULE */
		{
              provide:'IProductService',
              useClass:ProductService
              },
    ],
    exports: [
        /* PLOP_EXPORT_MODULE */
		{
              provide:'IProductService',
              useClass:ProductService
              },
    ]
})
export class DatabaseModule { }
