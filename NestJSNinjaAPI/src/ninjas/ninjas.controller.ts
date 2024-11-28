import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateNinjaDto } from './dtos/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from './guards/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  // GET /ninjas?weapon=stars -> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjaService.getNinjas(weapon);
  }

  // GET /ninjas/:id -> { ... }
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjaService.getNinja(id);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDto: CreateNinjaDto,
  ) {
    return this.ninjaService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjaService.removeNinja(+id);
  }
}
