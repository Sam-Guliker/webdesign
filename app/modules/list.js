import { data } from '../data/data.js'
const { hyper, wire } = hyperHTML;

class Principles extends hyper.Component {

    render() {
        return this.html`
        <ul class="container">
            ${data.map(item => wire(item)
        `<li>
        <h2>${item.name}</h2>
        <section>
            <p>${item.explain}</p>
            <h3>Example</h3>
            <img class="img-size" src="${item.imgExplain}" />
            <a href="#"> Another example link</a>
        </section>

        </li>`)}
        </ul>
    `
    }
}

hyper(document.body)`${new Principles}`;

export default Principles 