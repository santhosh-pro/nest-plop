import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Product } from "src/infrastructure/database/product/product.entity";
import { GetProductResponse } from "./get-product-response";

@Injectable()
export class GetProductMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Product,GetProductResponse );

    };
  }
}