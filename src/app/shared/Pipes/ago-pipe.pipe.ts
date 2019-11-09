import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo'
})
export class AgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value) {
      console.log('value', value);
      /**
       * ## 计算秒的时间差
       * `+` 将Date时间转为时间戳
       */
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 30) {
        return '刚刚';
      }
      /**
       * 字典数据
       */
      const intervals = {
        年: 3600 * 24 * 365,
        月: 3600 * 24 * 30,
        周: 3600 * 24 * 7,
        天: 3600 * 24,
        小时: 3600,
        分钟: 60,
        秒: 1,
      };
      /**
       * 遍历字典对象获取当前基础数据进行时间运算
       */
      let counter = 0;
      for (const unitName in intervals) {
        if (intervals.hasOwnProperty(unitName)) {
          const unitValue = intervals[unitName];
          counter = Math.floor(seconds / unitValue);

          if (counter > 0) {
            return `${counter} ${unitName}前`;
          }

        }
      }

    }
    return value;
  }

}
