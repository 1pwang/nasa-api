import { WeatherRepository } from '../repositories/weather-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  public async retrieveWeatherReport() {
    await this.weatherRepository.retrieveWeather();
  }
}
