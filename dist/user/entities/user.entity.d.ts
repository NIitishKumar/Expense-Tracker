import { Transaction } from '../../transaction/entities/transaction.entity';
export declare class User {
    id: number;
    name: string;
    username: string;
    email: string;
    age: number;
    password: string;
    gender: string;
    createdAt: Date;
    updatedAt: Date;
    date: Date;
    transactions: Transaction[];
}
