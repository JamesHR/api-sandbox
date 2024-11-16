import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user-dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: 'Iniciar sesión con las credenciales de usuario' })
    @ApiBody({type: LoginUserDto, description: 'Credenciales de usuario necesarias para iniciar sesión'})
    @ApiResponse({status: 200, description: 'Inicio de sesión exitoso. Devuelve un token de acceso.'})
    @ApiResponse({ status: 400, description: 'Credenciales inválidas. La autenticación falló.' })
    @ApiResponse({ status: 401, description: 'No autorizado. Las credenciales no son correctas.',})
    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }
}
