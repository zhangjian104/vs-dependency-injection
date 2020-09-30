import { ICarService } from './common';
import { IFrameService } from '../frame/common';

export class Car implements ICarService {
  constructor(
    @IFrameService private readonly frameService: IFrameService,
  ) {

  }
  run() {
    console.log('Car依赖Frame:', this.frameService);
  }
}