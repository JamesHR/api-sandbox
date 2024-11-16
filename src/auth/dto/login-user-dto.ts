import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty({ description: 'Email del usuario', example: 'mclovin.legend@hawaii.com' })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    
    @ApiProperty({ description: 'Contraseña del usuario', example: 'Hawaii@Driver99' })
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}