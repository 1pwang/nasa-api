import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherReportController } from './weather-report/weather-report.controller';
import { WeatherService } from './services/weatherService';
import { WeatherRepository } from './repositories/weather-repository';

@Module({
  imports: [],
  controllers: [AppController, WeatherReportController],
  providers: [AppService, WeatherService, WeatherRepository],
})
export class AppModule {}
