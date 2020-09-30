import { IInstantiationService } from './instantiation/instantiation';
import { InstantiationService } from './instantiation/instantiationService';
import { ServiceCollection } from './instantiation/serviceCollection';
import { SyncDescriptor } from './instantiation/descriptors';
import { ICarService } from './service/car/common';
import { Car } from './service/car/carService';
import { IFrameService } from './service/frame/common';
import { Frame } from './service/frame/frameService';

// master

function createServices(): [IInstantiationService] {
    const services = new ServiceCollection();
    services.set(ICarService, new SyncDescriptor(Car));
    services.set(IFrameService, new SyncDescriptor(Frame));
    return [new InstantiationService(services, true)];
}
const [instantiationService] = createServices();



// 人开车 人 <- 车 <- 框架 <- 底盘 <- 轮胎

class Man {
    constructor(
        // @ICarService private readonly carService: ICarService,
    ) {

    }
    drive() {

        instantiationService.invokeFunction(accessor => {
            const carService = accessor.get(ICarService);
            carService.run();
        })

    }
}


const man = instantiationService.createInstance(Man);
man.drive();
