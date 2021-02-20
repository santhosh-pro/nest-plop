import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class ProductBase {
    @ApiProperty()
    @AutoMap()
    name:string;

    @ApiProperty()
    @AutoMap()
    description:string;

    @ApiProperty()
    @AutoMap()
    price:number;
}