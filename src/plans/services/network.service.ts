import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Network } from '../models/network.model';

@Injectable()
export class NetworkService {
  constructor(
    @InjectModel(Network.name) private networkModel: Model<Network>,
  ) {}

  async getNetworkForCountry(id: string): Promise<Network[]> {
    return await this.networkModel.find({ country: { id } }).exec();
  }
}
