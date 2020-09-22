import { Product } from './product.module';
import { Shopping } from './shopping.model';

export class LeitorQrCodeResponse {
    
    shopping: Shopping;
    products: Product[];
    
  }