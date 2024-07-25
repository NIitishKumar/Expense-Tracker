import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: any): Promise<any>;
    findAllUser(): Promise<User[]>;
    viewUser(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: any): Promise<User>;
    removeUser(id: number): Promise<{
        affected?: number;
    }>;
}
