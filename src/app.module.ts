import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environments } from './shared/infrastructure/config/environments';
import config from './shared/infrastructure/config/config';
import { JoiValidations } from './shared/infrastructure/config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV ?? 'DEV'],
      isGlobal: true,
      load: [config],
      validationSchema: JoiValidations,
      validationOptions: {
        stripUnknown: true,
        abortEarly: false,
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
