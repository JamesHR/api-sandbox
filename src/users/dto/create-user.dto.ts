import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({description: 'Nombre del usuario', example: 'Fogell'})
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @ApiProperty({description: 'Apellido paterno del usuario', example: 'McLovin'})
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
    
    @ApiProperty({description: 'Apellido materno del usuario', example: 'Hawaiano'})
    @IsNotEmpty()
    @IsString()
    readonly motherLastName: string;
    
    @ApiProperty({description: 'Correo electrónico del usuario', example: 'mclovin.legend@hawaii.com'})
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    
    @ApiProperty({description: 'Contraseña del usuario', example: 'Hawaii@Driver99'})
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    
    @ApiProperty({description: 'Número de teléfono del usuario', example: '808-867-5309'})
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
    
    @ApiProperty({ description: 'Rol del usuario', example: 'admin', enum: ['admin', 'default'] })
    @IsNotEmpty()
    @IsString()
    @IsIn(['admin', 'default'])
    readonly role: string;
}
