import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private readonly TransactionRepository;
    constructor(TransactionRepository: Repository<any>);
    create(createTransactionDto: any): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransactionDto: UpdateTransactionDto): string;
    remove(id: number): string;
}
