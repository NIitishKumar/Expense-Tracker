import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly TransactionRepository: Repository<any>,
  ) {}

  create(createTransactionDto: any) {
    const transaction: any = new Transaction();
    transaction.type = createTransactionDto.type;
    transaction.amount = createTransactionDto.amount;
    transaction.description = createTransactionDto.createTransactionDto;
    transaction.user = createTransactionDto.user;
    return this.TransactionRepository.save(transaction);
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
