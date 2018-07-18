'use strict';

const app = hyperHTML.app();

const { hyper } = hyperHTML;

class Introduction extends hyper.Component {

    click(e) {
        app.navigate('/principles');
        e.preventDefault();
    }
    render() {
        return this.html`
        <main>
            <div class='container'>
            <h1>12 Principles of user interface design for minor-web developers</h1>
            <p>
                Time to bring clarity into the Principles of user interface design.
                It feels vague and it doesn’t really show how the web actually uses the principles
                to make it a beter place for everyone.
            </p>
            <a class='btn' href='' onclick=${this.click}> Read more about the principles <i class='fa fa-chevron-right' aria-hidden='true'></i></a>
            </div>
        </main>
        `
    }
}

hyper(document.body) `${new Introduction}`;

const data = [
    {
        id: '1',
        name: '1. Clarity is job',
        explain: 'Clarity is the first and most important job of any interface. To be effective using an interface you\'ve designed, people must be able to recognize what it is, care about why they would use it,understand what the interface is helping them interact with, predict what will happen when they use it, and then successfully interact with it. While there is room for mystery and delayed gratification in interfaces, there is no room for confusion. Clarity inspires confidence and leads to further use. One hundred clear screens is preferable to a single cluttered one.',
        imgExplain: '../images/clarity.png',
        context: 'You can shape the button more and more so that it becomes more clear to click on it. It always depends on the design choices and the project how you style elements.'
    },
    {
        id: '2',
        name: '2. Interfaces exist to enable interaction',
        explain: 'Interfaces exist to enable interaction between humans and our world. They can help clarify, illuminate, enable, show relationships, bring us together, pull us apart, manage our expectations, and give us access to services. The act of designing interfaces is not Art. Interfaces are not monuments unto themselves. Interfaces do a job and their effectiveness can be measured. They are not just utilitarian, however. The best interfaces can inspire, evoke, mystify, and intensify our relationship with the world.',
        imgExplain: '../images/interface.png',
        context: 'The Ipad does this very well, if you swipe you get the feeling that you are opening a page of a book, this feels natural.'
    },
    {
        id: '3',
        name: '3. Conserve attention at all costs',
        explain: 'We live in a world of interruption. It\'s hard to read in peace anymore without something trying to distract us and direct our attention elsewhere. Attention is precious. Don\'t litter the side of your applications with distractible material…remember why the screen exists in the first place. If someone is reading let them finish reading before showing that advertisement (if you must). Honor attention and not only will your readers be happier, your results will be better. When use is the primary goal, attention becomes the prerequisite. Conserve it at all costs.',
        imgExplain: '../images/attention.gif',
        context: 'When you read something important and suddenly there are popups. This is a no-go!'
    },
    {
        id: '4',
        name: '4. Keep users in control',
        explain: 'Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don\'t worry about stating the obvious…the obvious almost never is.        ',
        imgExplain: '../images/control.gif',
        context: 'You want to keep the user in control. When you click on something, don\'t want the opposite'
    },
    {
        id: '5',
        name: '5. Direct manipulation is best',
        explain: 'The best interface is none at all, when we are able to directly manipulate the physical objects in our world. Since this is not always possible, and objects are increasingly informational, we create interfaces to help us interact with them. It is easy to add more layers than necessary to an interface, creating overly-wrought buttons, chrome, graphics, options, preferences, windows, attachments, and other cruft so that we end up manipulating UI elements instead of what\'s important. Instead, strive for that original goal of direct manipulation…design an interface with as little a footprint as possible,recognizing as much as possible natural human gestures. Ideally, the interface is so slight that the user has a feeling of direct manipulation with the object of their focus.',
        imgExplain: '../images/direct-manipulation.png',
        context: 'It is difficult to manipulate real objects on the web, this is why it is useful to use tools to help the user knows what is possible.'
    },
    {
        id: '6',
        name: '6. One primary action per screen',
        explain: 'Every screen we design should support a single action of real value to the person using it. This makes it easier to learn, easier to use, and easier to add to or build on when necessary. Screens that support two or more primary actions become confusing quickly. Like a written article should have a single, strong thesis, every screen we design should support a single, strong action that is its raison d\'etre.',
        imgExplain: '../images/primary.png',
        context: 'Create the interfaces so that there is 1 task per screen, the chat is a good example. The user can type in and send something. So it\'s not too tiring and not too complex'
    },
    {
        id: '7',
        name: '10. Consistency matters',
        explain: 'Screen elements should not appear consistent with each other unless they behave consistently with each other. Elements that behave the same should look the same. But it is just as important for unlike elements to appear unlike (be inconsistent) as it is for like elements to appear consistent. In an effort to be consistent novice designers often obscure important differences by using the same visual treatment (often to re-use code) when different visual treatment is appropriate.',
        imgExplain: '../images/consistincy.png',
        context: 'When elements have the same behaviour they have to resemble each other, when they have different behaviour they may look different.'
    },
    {
        id: '8',
        name: '11. Strong visual hierarchies work best',
        explain: 'A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time. Weak visual hierarchies give little clue about where to rest one\'s gaze and end up feeling cluttered and confusing. In environments of great change it is hard to maintain a strong visual hierarchy because visual weight is relative: when everything is bold, nothing is bold. Should a single visually heavy element be added to a screen, the designer may need to reset the visual weight of all elements to once again achieve a strong hierarchy. Most people don\'t notice visual hierarchy but it is one of the easiest ways to strengthen (or weaken) a design.',
        imgExplain: '../images/strong.png',
        context: 'BOLD clearly shows where the attention should go, so it allows you to improve the hierarchy in a website and primarily help the user.'
    },
    {
        id: '9',
        name: '12. Smart organization reduces cognitive load',
        explain: 'As John Maeda says in his book Simplicity, smart organization of screen elements can make the many appear as the few. This helps people understand your interface easier and more quickly, as you\'ve illustrated the inherent relationships of content in your design.Group together like elements, show natural relationships by placement and orientation.By smartly organizing your content you make it less of a cognitive load on the user…who doesn\'t have to think about how elements are related because you\'ve done it for them.Don\'t force the user to figure things out…show them by designing those relationships into your screens.',
        imgExplain: '../images/relation.gif',
        context: 'Try to keep it simple and show the relationships between components and how they interact.'
    },
    {
        id: '10',
        name: '13. Highlight don’t determine with color',
        explain: 'The color of physical things changes as light changes. In the full light of day we see a very different tree than one outlined against a sunset. As in the physical world, where color is a many-shaded thing, color should not determine much in an interface. It can help, be used for highlighting, be used to guide attention, but should not be the only differentiator of things. For long-reading or extended screen hours, use light or muted background colors, saving brighter hues for your accent colors. Of course there is a time for vibrant background colors as well, just be sure that it is appropriate for your audience.',
        imgExplain: '../images/highlight.png',
        context: 'There are several ways to attract the eye more than only colour. Colour alone is often too subtle to think of size, shape, underline etc.'
    },
    {
        id: '11',
        name: '14. Progressive disclosure',
        explain: 'Show only what is necessary on each screen. If people are making a choice, show enough information to allow them the choice, then dive into details on a subsequent screen. Avoid the tendency to over-explain or show everything all at once. When possible, defer decisions to subsequent screens by progressively disclosing information as necessary. This will keep your interactions more clear.    ',
        imgExplain: '../images/disclosure.gif',
        context: 'By clicking on the first option you will get more options. This way the task does not become too complex and the user only gets more options when he/she is interested.'
    },
    {
        id: '12',
        name: '16. A crucial moment: the zero state',
        explain: 'The first time experience with an interface is crucial, yet often overlooked by designers. In order to best help our users get up to speed with our designs, it is best to design for the zero state, the state in which nothing has yet occurred. This state shouldn\'t be a blank canvas…it should provide direction and guidance for getting up to speed. Much of the friction of interaction is in that initial context…once people understand the rules they have a much higher likelihood of success.',
        imgExplain: '../images/zero.png',
        context: 'with a simple popup you can tell the user what the first step is in your website/app. This is useful if there are a range of tasks that will make your application complex.'
    },

];

const { hyper: hyper$1, wire } = hyperHTML;

class Principles extends hyper$1.Component {

    constructor(show) {
        super();
        this.setState({ show: false });
        this.setState({ index: null });
    }

    handleChange(e, i) {
        const { show, index } = this.state;

        if (show && index === i) {
            this.setState({
                show: !this.state.show,
            });
        } else if (show && index !== i) {
            this.setState({
                index: i
            });
        } else {
            this.setState({
                show: !this.state.show,
                index: i
            });
        }
        e.preventDefault();
    }

    render() {
        const { show, index } = this.state;

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
                        <h3>Example:</h3>
                        <p class="context-padding">${item.context}</p>
                        <img class='img-size' src='${item.imgExplain}' />
                        <a href='https://principles.design/examples/principles-of-user-interface-design' target='blank'class='btn inline-block'> Another example <i class='fa fa-chevron-right' aria-hidden='true'></i></a>
                    </div>                   
                </section>
                </li>`)
            }
            </ul>
        </main >
    `
    }
}

hyper$1(document.body) `${new Principles} `;

const { hyper: hyper$2 } = hyperHTML;

const page = {
    introduction: new Introduction,
    principles: new Principles
};

const routes = {
    init() {
        app.get('/', () => hyper$2(document.body) `${page.introduction}`);
        app.get('/principles', () => hyper$2(document.body) `${page.principles}`);
        app.navigate('/');
    }
};

(function () {

    const app = {
        init() {
            routes.init();
        }
    };
    app.init();
})();
