import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from '../services/weatherService';

@Controller('weather-report')
export class WeatherReportController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/retrieveWeather')
  public async retrieveWeatherReport() {
    return await this.weatherService.retrieveWeatherReport();
  }

  @Get('/weatherReportFilter')
  public async weatherReportFile(@Query('weatherProp') weatherProp) {
    return await this.weatherService.weatherReportFilter(weatherProp);
  }
}
