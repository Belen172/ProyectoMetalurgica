import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre y apellido es obligatorio.' })
  nombre: string;

  @IsString()
  @IsOptional()
  empresa?: string;

  @IsEmail({}, { message: 'El formato del correo no es válido.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  email: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsNotEmpty({ message: 'El detalle de la consulta es obligatorio.' })
  mensaje: string;
}