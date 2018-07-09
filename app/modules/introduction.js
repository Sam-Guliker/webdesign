const { hyper } = hyperHTML
import app from './navigate-app.js'

class Introduction extends hyper.Component {

    click(e) {
        app.navigate('/principles');
        e.preventDefault();
    }

    render() {
        return this.html`
        <main>
            <div class='container'>
            <h1>12 Principles of user interface design for developers</h1>
            <p>
                    Time to bring clarity into the Principles of user interface design.
                    It feels vague and it doesn’t really show how the web actually uses the principles
                    to make it a beter place for everyone.
            </p>
            <a class='btn' href="#" onclick=${this.click}> Read more about this subject <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </main>
        `
    }
}

hyper(document.body)`${new Introduction}`;

export default Introduction 