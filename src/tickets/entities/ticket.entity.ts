import { TicketStatus } from '../../ticket-status/entities/ticket-status.entity';
import { User } from '../../users/entities/user.entity';
import { EntityHelper } from '../../utils/entity-helper';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => TicketStatus, {
    eager: true,
  })
  ticketStatus?: TicketStatus;

  @Column()
  attentionId: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  user?: User | null;
}
