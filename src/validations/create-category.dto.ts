import { MinLength, MaxLength } from "class-validator";

export class CreateCategoryDto {
  @MinLength(5)
  @MaxLength(80)
  name: string = "";

  @MinLength(20)
  @MaxLength(100)
  desc: string = "";
}
