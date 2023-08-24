import { Router } from 'express';

export interface Controller {
  register(router: Router): void;
}
