import { data } from '../data/data.js'

export const list = {
    init() {
        const { bind: hyper, wire } = hyperHTML;

        const listRender = hyperHTML.bind(document.body);

        const body = document.querySelector('body')

        function click(e) {
            e.preventDefault();
            alert('You wish! Muahahaha');
        }

        listRender`
                <ul>
                    ${data.map(item => wire(item)
                `<li>
                <h2>${item.name}</h2>
                <details>
                    <p>
                    Clarity is the first and most important job of any interface. 
                    To be effective using an interface you've designed, people must be …
                    <span class="hidden"></span>
                    </p>

                    <button onclick="${click}">read more </button>
                    <h3>Example</h3>    
                </details>

                </li>`)}
                </ul>
        `
    }
}
