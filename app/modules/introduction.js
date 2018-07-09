import { list } from './list.js'

export const introduction = {
    init() {
        const bodyRender = hyperHTML.bind(document.body);

        function click(e) {
            e.preventDefault();
            window.location.hash = '#principles'
        }

        bodyRender`
            <main>
                <div class='container'>
                <h1>12 Principles of user interface design for developers</h1>
                <p>
                        Time to bring clarity into the Principles of user interface design.
                        It feels vague and it doesn’t really show how the web actually uses the principles
                        to make it a beter place for everyone.
                </p>
                <a class='btn' href="#" onclick=${click}> Read more about this subject <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                </div>
            </main>
            `
    }
}
