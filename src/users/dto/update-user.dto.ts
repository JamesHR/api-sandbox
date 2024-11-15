import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
    
    @IsNotEmpty()
    @IsString()
    readonly firstName?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly lastName?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly motherLastName?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly email?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly password?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly phone?: string;
    
    @IsNotEmpty()
    @IsString()
    @IsIn(['admin', 'default'])
    readonly role?: string;
}