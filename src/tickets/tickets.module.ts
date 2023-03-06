import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from './entities/ticket.entity';

@Module({
  imports: [Ticket],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService, TicketsController],
})
export class TicketsModule {}
