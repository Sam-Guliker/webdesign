import { data } from '../data/data.js'

export const list = {
    init() {
        const { bind: hyper, wire } = hyperHTML;

        const listRender = hyperHTML.bind(document.body);
        const body = document.querySelector('body')

        function click(e) {
            const readMore = document.querySelector('.read-more')
            if (readmore.classList.contains('hidden')) {
                readmore.classList.remove('hidden')
            } else {
                readmore.classList.add('hidden')
            }

        }

        console.log(data)

        listRender`
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
