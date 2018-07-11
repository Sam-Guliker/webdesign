import data from '../data/data.js'
const { hyper, wire } = hyperHTML;

class Principles extends hyper.Component {

    constructor(show) {
        super();
        this.setState({ show: false });
        this.setState({ index: null });
    }

    handleChange(e, i) {
        const { show, index } = this.state

        if (show && index === i) {
            this.setState({
                show: !this.state.show,
            })
        } else if (show && index !== i) {
            this.setState({
                index: i
            })
        } else {
            this.setState({
                show: !this.state.show,
                index: i
            })
        }
        e.preventDefault()
    }

    render() {
        const { show, index } = this.state

        return this.html`
        <main>

            <ul class='container list'>
                ${data.map((item, i) => wire(item)
                `<li>
                <a href='#' onClick=${(e) => this.handleChange(e, i)}><h2 class=${show ? 'selected' : ''}>${item.name}</h2></a>
                <section class=${(index === i && show) ? 'selected' : ''}>
                    <div>
                        <p>${item.explain}</p>
                    </div>
                    <div>
                        <h3>Example: </h3>
                        <img class='img-size' src='${item.imgExplain}' />
                        <a href='https://codepen.io/' target='blank'class='btn inline-block'> Another example link <i class='fa fa-chevron-right' aria-hidden='true'></i></a>
                    </div>                   
                </section>
                </li>`)
            }
            </ul>
        </main >
    `
    }
}

hyper(document.body) `${new Principles} `;

export default Principles 