import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { TicketStatus } from '../../ticket-status/entities/ticket-status.entity';
import { User } from '../../users/entities/user.entity';
import { IsExist } from '../../utils/validators/is-exists.validator';

export class CreateTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ type: TicketStatus })
  @Validate(IsExist, ['TicketStatus', 'id'], {
    message: 'ticketStausNotExists',
  })
  ticketStatus?: TicketStatus;

  @ApiProperty()
  attentionId: string;

  @ApiProperty({ type: User })
  @Validate(IsExist, ['User', 'id'], {
    message: 'userNotExists',
  })
  user?: User | null;
}
