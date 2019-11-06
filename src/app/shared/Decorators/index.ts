/**
 * 自定义注解 仅改变值
 * 通过函数的getter/setter重写
 */
export function Emoki() {
    return (target: object, key: string) => {
        let val = target[key];

        const getter = () => {
            return val;
        };

        const setter = (value: string) => {
            return val = `hello , ${value}`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
/**
 * 点击事件为事件提供弹窗确认事件
 * @param message dialog弹窗内部提示信息
 */
export function confirmable(message: string) {
    return (target: object, key: string, descriptor: PropertyDescriptor) => {
        /**
         * 定义函数内部变量用来处理数据
         * 记录原有descriptor的value值
         * 重置descriptor的value值为函数调用接受参数
         * 如果确认则将原来函数环境变量重新绑定到this上返回
         */
        const original = descriptor.value;
        descriptor.value = function (...args: any) {
            const allow = window.confirm(message);
            if (allow) {
                const result = original.apply(this, args);
                return result;
            }
            return null;
        };
        return descriptor;
    };
}
