import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  //id: number;

  @MinLength(5)
  name: string;

  @IsEnum(['stars', 'nunchucks'], { message: 'use correct weapon' })
  weapon: 'stars' | 'nunchucks';
}
