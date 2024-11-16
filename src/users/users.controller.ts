import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado exitosamente', type: CreateUserDto })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos' })
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [CreateUserDto]})
    @ApiResponse({ status: 404, description: 'No se encontraron usuarios' })
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un usuario por email' })
    @ApiParam({ name: 'email', type: String, description: 'correo electrónico del usuario que se quiere obtener' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado', type: CreateUserDto})
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    @Get(':email')
    findByEmail(@Param('email') email: string) {
        return this.usersService.findByEmail(email);
    }

    @ApiOperation({ summary: 'Obtener un usuario por id' })
    @ApiParam({ name: 'id', type: String, description: 'Id del usuario que se quiere obtener' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado', type: CreateUserDto})
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    @Get('id/:id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar un usuario existente' })
    @ApiParam({ name: 'id', type: String, description: 'Id usuario del usuario a actualizar' })
    @ApiBody({ type: CreateUserDto, description: 'Datos que se actualizarán del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario actualizado exitosamente', type: CreateUserDto })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @ApiOperation({ summary: 'Eliminar un usuario por su ID' })
    @ApiParam({ name: 'id', type: String, description: 'ID del usuario que se desea eliminar' })
    @ApiResponse({ status: 200, description: 'Usuario eliminado exitosamente' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
