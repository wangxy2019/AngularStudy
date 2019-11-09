import { InjectionToken } from '@angular/core';

export * from './home.service';
/**
 * 大型项目中字符串容易耦合冲突
 * 需要使用注入器注入一个处理后的token
 * 作为注入池中的标识
 * 在Index.ts中共享给全部
 */
export const token = new InjectionToken('baseUrl');
