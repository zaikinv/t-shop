import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
   * Returns an Import Map JSON
   */
  @Get()
  getImportMap(): string {
    return this.appService.getImportMap();
  }

  /*
   * Handles assets upload and Import Map update
   */
  @Post('uploadAsset')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './assets',
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    this.appService.updateImportMap({
      name: body['microfrontend-name'],
      url: `http://localhost:3000/${file.originalname}`,
    });
  }

  /*
   * Handles Import Map update
   */
  @Post('updateImportMap')
  updateImportMap(@Body() body) {
    this.appService.updateImportMap({
      name: body['dependency-name'],
      url: `https://esm.sh/${body['dependency-name']}@${body['dependency-version']}`,
    });
  }
}
