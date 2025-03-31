import { DigitalSignatureStatus } from "src/domain/enums/digital-signature-status.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'digital_signature', schema: 'signature' })
export class DigitalSignatureEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_signature_provider', type: 'varchar', length: 100, unique: true })
  idSignatureProvider: string;

  @Column({ type: 'enum', enum: DigitalSignatureStatus, default: DigitalSignatureStatus.PENDING })
  status: DigitalSignatureStatus;

  @Column({ name: 'email_delivery', type: 'varchar', length: 50 })
  emailDelivery: string;

  @Column({ name: 'invoke_app', type: 'varchar', length: 50 })
  invokeApp: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  constructor(partial: Partial<DigitalSignatureEntity>) {
    Object.assign(this, partial);
  }

}