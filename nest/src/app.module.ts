import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', { useUnifiedTopology: true, useNewUrlParser: true }),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
