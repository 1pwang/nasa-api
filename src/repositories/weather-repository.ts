import axios, { AxiosError, AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherRepository {
  private readonly axios: AxiosInstance;

  constructor() {
    const headers = {
      'Content-Type': 'application/json',
    };
    this.axios = axios.create({
      baseURL: 'https://mars.nasa.gov/rss/api',
      timeout: 15_000,
      headers,
    });
  }

  public async retrieveWeather() {
    try {
      const params = {
        feed: 'weather',
        category: 'insight_temperature',
        feedType: 'json',
        ver: 1.0,
      };

      const response = await this.axios.get('/', { params });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError && err.isAxiosError) {
        console.error('Axios error:', err.message);
        throw new Error('Error retrieving weather report');
      }
    }
  }
}
