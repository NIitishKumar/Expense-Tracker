import { User } from 'src/user/entities/user.entity';
export declare class Transaction {
    id: number;
    amount: number;
    type: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    date: Date;
    user: User;
}
