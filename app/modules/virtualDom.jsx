/** @jsx h */

console.log(a);    
export const virtualDom = {
    init() {
        console.log('hi')
        const a = (
            <ul class="list">
                <li>item 1</li>
                <li>item 2</li>
            </ul>
        );
    
        console.log(a);    
    }
}