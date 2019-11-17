import { UserClass, UserModel, ArticleClass, ArticleModel } from './model';

const user = new UserClass('张三', '123');

UserModel.add(user);

const article = new ArticleClass('文字', '描述');

ArticleModel.add(article);
