import { MinLength, MaxLength, ArrayMaxSize, ArrayMinSize } from "class-validator";

export class CreatePostDto {
  @MinLength(5)
  @MaxLength(20)
  title: string = "";

  @MinLength(20)
  @MaxLength(100)
  body: string = "";

  @ArrayMaxSize(5)
  @ArrayMinSize(3)
  categories: number[] = [];
}
