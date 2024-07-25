import { CreateUserDto } from './create-user.dto';
import { User } from '../entities/user.entity';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    amount: number;
    type: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    date: Date;
    user: User;
}
export {};
