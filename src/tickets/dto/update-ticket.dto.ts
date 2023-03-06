import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { TicketStatus } from '../../ticket-status/entities/ticket-status.entity';
import { IsExist } from '../../utils/validators/is-exists.validator';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @ApiProperty()
  date: Date;

  @ApiProperty({ type: TicketStatus })
  @Validate(IsExist, ['TicketStatus', 'id'], {
    message: 'ticketStausNotExists',
  })
  ticketStatus?: TicketStatus;

  @ApiProperty()
  attentionId: string;
}
