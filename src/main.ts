import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import * as ejs from 'ejs-mate'
import * as path from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const root = path.resolve(__dirname, '..');
  const viewPath = path.resolve(root, 'views');
  app.setBaseViewsDir(viewPath);
  app.engine('html', ejs);
  app.setViewEngine('html');
  // app.engine('html', ejs)
  // app.set('view engine', 'html');
  // app.set('views', viewPath);
  
  await app.listen(3000);
}
bootstrap();
