/**
 * 功能：定义一个操作数据库的库 ： 支持Mysql Mssql MongoDB
 * 要求：约束统一规范，以及代码重用
 * 解决：需要约束规范定义接口，需要代码重用需要泛型
 * 1. 接口：在面向对象编程中，接口是一种规范的定义，定义了行为和动作规范
 * 2. 泛型 通俗理解：泛型是解决 接口 类 方法的复用性
 */

/**
 * 定义规范实现的接口
 */
interface DBI<T> {

    add(info: T): boolean;

    delete(id: number): boolean;

    update(info: T, id: number): boolean;

    get(id: number): any[];

}

/**
 * 定义一个操作Mysql数据库的类
 * 注意：要实现泛型接口 这个类也应该是一个泛型类
 */
class MysqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error('Method not implemented.');
    } delete(id: number): boolean {
        throw new Error('Method not implemented.');
    }
    update(info: T, id: number): boolean {
        throw new Error('Method not implemented.');
    }
    get(id: number): any[] {
        throw new Error('Method not implemented.');
    }
}
/**
 * 定义一个操作Mssql数据库的类
 * 注意：要实现泛型接口 这个类也应该是一个泛型类
 */
class MssqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error('Method not implemented.');
    } delete(id: number): boolean {
        throw new Error('Method not implemented.');
    }
    update(info: T, id: number): boolean {
        throw new Error('Method not implemented.');
    }
    get(id: number): any[] {
        throw new Error('Method not implemented.');
    }
}
/**
 * 定义一个操作MongoDb数据库的类
 * 注意：要实现泛型接口 这个类也应该是一个泛型类
 */
class MongoDB<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error('Method not implemented.');
    } delete(id: number): boolean {
        throw new Error('Method not implemented.');
    }
    update(info: T, id: number): boolean {
        throw new Error('Method not implemented.');
    }
    get(id: number): any[] {
        throw new Error('Method not implemented.');
    }
}

export { MysqlDb, MssqlDb, MongoDB };
