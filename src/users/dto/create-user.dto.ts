export class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly motherLastName: string;
    readonly email: string;
    readonly password: string;
    readonly phone: string;
    readonly role: string;
}