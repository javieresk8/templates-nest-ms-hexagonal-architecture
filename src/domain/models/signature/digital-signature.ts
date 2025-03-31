import { DigitalSignatureStatus } from "src/domain/enums/digital-signature-status.enum";
import { BaseModel } from "src/shared/domain/models/base-model";

export class DigitalSignature implements BaseModel {
  id: number;
  idSignatureProvider: string;
  status: DigitalSignatureStatus;
  emailDelivery: string;
  invokeApp: string;
  updatedAt: Date;
  createdAt: Date;
  

}