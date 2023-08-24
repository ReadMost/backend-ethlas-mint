import {
  receiptCreationSerializer,
  receiptMyListSerializer,
} from '../serializers/receiptSerializer';
import { Receipt } from '../entity/receipt';
import { receiptRepository } from '../repositories';

export class ReceiptController {
  async getList(req, res) {
    const user = req.params.user;
    const receiptObjs = await receiptRepository.find({
      where: {
        user: user.toLowerCase(),
      },
    });
    return res.status(200).json(receiptObjs);
  }

  async save(req, res) {
    try {
      const validatedBody = await receiptCreationSerializer.validateAsync(
        req.body,
      );
      let receiptObj = new Receipt();
      receiptObj.user = validatedBody.user.toLowerCase();
      receiptObj.price = validatedBody.price;
      receiptObj.amount = validatedBody.amount;
      receiptObj.tx_hash = validatedBody.tx_hash;
      receiptObj.token_id = validatedBody.token_id;

      const receipt = await receiptRepository.save(receiptObj);
      return res.status(200).json(receipt);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
