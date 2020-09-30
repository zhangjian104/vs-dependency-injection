"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instantiationService_1 = require("./instantiation/instantiationService");
const serviceCollection_1 = require("./instantiation/serviceCollection");
const descriptors_1 = require("./instantiation/descriptors");
const common_1 = require("./service/car/common");
const carService_1 = require("./service/car/carService");
const common_2 = require("./service/frame/common");
const frameService_1 = require("./service/frame/frameService");
function createServices() {
    const services = new serviceCollection_1.ServiceCollection();
    services.set(common_1.ICarService, new descriptors_1.SyncDescriptor(carService_1.Car));
    services.set(common_2.IFrameService, new descriptors_1.SyncDescriptor(frameService_1.Frame));
    return [new instantiationService_1.InstantiationService(services, true)];
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
            const carService = accessor.get(common_1.ICarService);
            carService.run();
        });
    }
}
const man = instantiationService.createInstance(Man);
man.drive();
//# sourceMappingURL=index.js.map