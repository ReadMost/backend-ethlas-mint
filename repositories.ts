import { AppDataSource } from "./data-source";
import { Receipt } from "./entity/receipt";

export const receiptRepository = AppDataSource.getRepository(Receipt);
