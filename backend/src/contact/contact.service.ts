import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT', 465),
      secure: this.configService.get<string>('MAIL_SECURE') === 'true',
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendContactEmail(dto: CreateContactDto) {
    const destination = 
    this.configService.get<string>('MAIL_DESTINATION') || 
    this.configService.get<string>('MAIL_USER') || 
    '';

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1e2044; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; text-transform: uppercase; letter-spacing: 1px;">Nueva Consulta de la Web</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #d0d2e6;">Metalúrgica Soltermann</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 35%;">Nombre y Apellido:</td>
              <td style="padding: 8px 0; color: #111;">${dto.nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Empresa / Razón Social:</td>
              <td style="padding: 8px 0; color: #111;">${dto.empresa || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Correo Electrónico:</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${dto.email}">${dto.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td>
              <td style="padding: 8px 0; color: #111;">${dto.telefono || 'No especificado'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #9D2E35; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #333;">Mensaje / Consulta:</p>
            <p style="margin: 0; white-space: pre-line; color: #444;">${dto.mensaje}</p>
          </div>
        </div>
      </div>
    `;

    try {
      await this.transporter.sendMail({
        from: `"Web Soltermann" <${this.configService.get<string>('MAIL_USER')}>`,
        to: destination,
        replyTo: dto.email, // Para que al hacer clic en "Responder" le responda directo al cliente
        subject: `Nueva Consulta Web: ${dto.nombre}${dto.empresa ? ` - ${dto.empresa}` : ''}`,
        html: htmlTemplate,
      });

      return { success: true, message: 'Consulta enviada correctamente.' };
    } catch (error) {
      console.error('Error al enviar email:', error);
      throw new InternalServerErrorException('Error al enivar la consulta. Reintentá más tarde.');
    }
  }
}