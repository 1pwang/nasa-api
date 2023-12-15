import { WeatherRepository } from '../repositories/weather-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  public async retrieveWeatherReport() {
    return await this.weatherRepository.retrieveWeather();
  }

  public async weatherReportFilter(weatherProp): Promise<any> {
    const weatherData = await this.weatherRepository.retrieveWeather();

    let filteredData = {};
    let result = '';

    for (const sol in weatherData) {
      if (weatherData.hasOwnProperty(sol) && !isNaN(Number(sol))) {
        const solData = weatherData[sol];
        if (solData[weatherProp]) {
          filteredData = solData[weatherProp];
          result += `Sol ${sol}: ${weatherProp} ${JSON.stringify(filteredData)}`;
        }
      }
    }
    return result;
  }
}
