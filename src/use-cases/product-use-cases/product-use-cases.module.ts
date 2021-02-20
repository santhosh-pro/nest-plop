import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreateProductMapper } from './create-product/create-product-mapper';
import { CreateProductController } from './create-product/create-product.controller';
import { DeleteProductController } from './delete-product/delete-product.controller';
import { GetProductListMapper } from './get-product-list/get-product-list-mapper';
import { GetProductListController } from './get-product-list/get-product-list.controller';
import { GetProductMapper } from './get-product/get-product-mapper';
import { GetProductController } from './get-product/get-product.controller';
import { UpdateProductMapper } from './update-product/update-product-mapper';
import { UpdateProductController } from './update-product/update-product.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreateProductController,
        UpdateProductController,
        DeleteProductController,
        GetProductController,
        GetProductListController
    ],
    providers: [
        CreateProductMapper,
        GetProductListMapper,
        GetProductMapper,
        UpdateProductMapper
    ],
})
export class ProductUseCasesModule {}
