import { Injectable } from '@nestjs/common';

const importMap = {};


@Injectable()
export class AppService {
  getImportMap(): any {
    return importMap;
  }
  updateImportMap({ name, url }): any {
    importMap[name] = url;
  }
}
