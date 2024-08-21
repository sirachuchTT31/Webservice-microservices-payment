import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPayment(): any {
    return {
      status: true,
      statusCode: 200,
      result: {
        order: 'transation001',
        payment: 'K-Bank'
      }
    }
  }
}
