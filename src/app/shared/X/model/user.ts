import { MysqlDb } from '../Modules';

/**
 * 操作用户表
 * 定义一个User类 和数据表映射
 */
class UserClass {
    username: string;
    password: string;
    constructor(n: string, p: string) {
        this.username = n;
        this.password = p;
    }
}

const UserModel = new MysqlDb<UserClass>();

export { UserClass, UserModel };
