/** @jsx h */

console.log(a);
export const virtualDom = {
    init() {
        console.log('hi')
        const a = (
            h('ul', {class: "list"}, [
                h('li', null, ["item 1"]),
                h('li', null, ["item 2"])
            ])
        );

        console.log(a);
    }
}