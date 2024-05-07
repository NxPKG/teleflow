import { IInboundParse } from './inbound-parse.interface';
import { WithHttp } from '../teleflow.interface';

export class InboundParse extends WithHttp implements IInboundParse {
  async getMxStatus() {
    return await this.http.get(`/inbound-parse/mx/status`);
  }
}
