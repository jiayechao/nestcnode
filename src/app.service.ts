import { Injectable, Render } from '@nestjs/common';

@Injectable()
export class AppService {
  @Render('index')
  getHello(): string {
    return 'Hello World!';
  }
}
