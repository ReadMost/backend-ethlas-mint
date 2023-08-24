import { Express } from 'express';
import { ReceiptController } from '../controllers/receiptController';
import asyncHandler from 'express-async-handler';

export function v1Routing(app: Express) {
  const receiptController = new ReceiptController();
  const version = '/v1';

  app.post(
    `${version}/receipt/`,
    asyncHandler(receiptController.save.bind(receiptController)),
  );

  app.get(
    `${version}/receipt/list/:user`,
    asyncHandler(receiptController.getList.bind(receiptController)),
  );
}
