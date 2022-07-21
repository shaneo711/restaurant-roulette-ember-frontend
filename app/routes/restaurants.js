import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class RestaurantsRoute extends Route {
  async model() {
    let response = await fetch('/restaurants');
    let data = await response.json();
    console.log(data);
    return data;
  }
}
