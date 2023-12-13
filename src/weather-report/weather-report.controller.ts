import { Controller, Get } from '@nestjs/common';
import { WeatherService } from '../services/weatherService';

@Controller('weather-report')
export class WeatherReportController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/retrieveWeather')
  public async retrieveWeatherReport() {
    await this.weatherService.retrieveWeatherReport();
  }
}
