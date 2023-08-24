import * as Joi from 'joi';

export const receiptCreationSerializer = Joi.object({
  user: Joi.string().required(),
  // FeePerGas must be in wei (not in gwei)
  price: Joi.string().required(),
  amount: Joi.number().required(),
  token_id: Joi.string().required(),
  tx_hash: Joi.string().required(),
}).unknown(true);

export const receiptMyListSerializer = Joi.object({
  user: Joi.string().required(),
}).unknown(true);
