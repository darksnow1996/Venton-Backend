import { Seeder } from 'mongoose-data-seed';
import { CarOwner } from '../model';

const data = require('../helpers/excel')

class CarOwnerSeeder extends Seeder {

  async shouldRun() {
    const CarOwnercount =  await CarOwner.count().exec();

    return CarOwnercount === 0;
  }

  async run() {
    return CarOwner.create(data);
  }
}

export default CarOwnerSeeder;
