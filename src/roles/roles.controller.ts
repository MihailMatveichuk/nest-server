import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { Role } from './role.model';
import { CreateRoleDto } from 'src/roles/dto/role-create.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get('/:name')
  getOne(@Param('name') name: string) {
    const role = this.rolesService.getOne(name);
    return role;
  }

  @ApiOperation({ summary: 'Create new role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.create(dto);
  }
}
