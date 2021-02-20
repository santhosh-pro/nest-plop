import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
/* PLOP_INJECT_IMPORT */
import { ProductUseCasesModule } from './product-use-cases/product-use-cases.module';
@Module({
    imports: [
        CommonModule,
        DatabaseModule,
        /* PLOP_INJECT_MODULE */
		ProductUseCasesModule,
     ],
    controllers: [],
    providers: [],
})
export class UseCasesModule {}