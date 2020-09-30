import { createDecorator } from '../../instantiation/instantiation';

export const ICarService = createDecorator<ICarService>('carService');


export interface ICarService {
	run(): void;
}