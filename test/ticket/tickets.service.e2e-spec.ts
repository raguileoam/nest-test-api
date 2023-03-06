import { Test, TestingModule } from '@nestjs/testing';
import { TicketStatus } from '../../src/ticket-status/entities/ticket-status.entity';
import { TicketStatusEnum } from '../../src/ticket-status/ticket-status.enum';
import { User } from '../../src/users/entities/user.entity';
import { TicketsService } from '../../src/tickets/tickets.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Ticket } from '../../src/tickets/entities/ticket.entity';

describe('TicketsService', () => {
  let service: TicketsService;
  const mockTicket = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        {
          provide: getRepositoryToken(Ticket),
          useValue: {
            save: jest.fn().mockResolvedValue(mockTicket),
            find: jest.fn().mockResolvedValue([mockTicket]),
            create: jest.fn().mockResolvedValue(mockTicket),
          },
        },
      ],
    }).compile();

    service = module.get<TicketsService>(TicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('', async () => {
    const response = await service.create({
      attentionId: '1',
      date: new Date(),
      ticketStatus: {
        id: TicketStatusEnum.active,
      } as TicketStatus,
      user: {
        id: 1,
      } as User,
    });
    expect(response).toBeDefined();
  });
});
