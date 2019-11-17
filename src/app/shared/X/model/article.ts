import { MysqlDb } from '../Modules';

/**
 * 操作用户表
 * 定义一个User类 和数据表映射
 */
class ArticleClass {
    title: string;
    des: string;
    constructor(t: string, d: string) {
        this.title = t;
        this.des = d;
    }
}

const ArticleModel = new MysqlDb<ArticleClass>();

export { ArticleClass, ArticleModel };
