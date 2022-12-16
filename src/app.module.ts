import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { pastrySchema } from './schema/pastry.schema';
import { PastryService } from './service/pastry.service';
import { PastryController } from './controller/pastry.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pastrydb'),
    MongooseModule.forFeature([{ name: 'Pastry', schema: pastrySchema }]),
  ],
  controllers: [AppController, PastryController],
  providers: [AppService, PastryService],
})
export class AppModule {}
