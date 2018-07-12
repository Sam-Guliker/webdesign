# Webdesign
For this topic I have to look at who the users are and create an exclusive website for them.

# Table of Content
* [Getting started](#getting-started)
* [Introduction](#introduction)
* [Users](#users)
* [User Scenario](#user-scenario)
* [Testing](#testing)
    * [test-results](#test-results)
* [Principles of User Interface Design](#principles-of-user-interface-design)
    * [2. Interfaces exist to enable interaction](#2.-interfaces-exist-to-enable-interaction)
    * [3. Conserve attention at all costs](#3.-conserve-attention-at-all-costs)
    * [10. Consistency matters](#10-consistency-matters)
    * [11. Strong visual hierarchies work best](11.-strong-visual-hierarchies-work-best)
    * [13. Highlight don’t determine with color](13.-hiehglight-don't-determine-with-color)
    * [14. Progressive Disclosure](14.-progressive-desclosure)
* [Conclusion Webdesign](#conculsion-webdesign)
* [Web app from scratch](#web-app-from-scratch)
    * [HyperHTML](#hyperhtml)
    * [Sass](#sass)
    * [Learning-progres](#learning-progres)
    * [Wish-list](#wish-list)
    * [Conclusion](#conclusion)

# Getting Started
How to get started with this project:
1.  Clone the repo with `git clone https://github.com/Sam-Guliker/minor-vangogh` or download it from github
2.  Run `npm install`  to install the dependencies
3.  Run `npm start` to start the server
4.  Go to [http://localhost:3000/](http://localhost:3000/)

# Users: 
Everything Web students.

# User Scenario
I want to make sure that topics of principles of user interface  
design are clear to students of the everything web minor, the principles   
do not remain vague.

# Testing
I've tested with my minor students.

* Jamie
* Kevin
* Vincent

## Test results
### Jamie
> Make the text lines smaller and maybe you can put it next to each other.  -Jamie

What he means by this is to go from one column to  
two column, so you can create more space for the content and  
make the text more readable.

### Kevin
> The website list feels "choppie". Kevin

This is due to the margins that have to be adjusted and there is no animation on the content block.

### Vincent
> EImage only examples do not work properly.

Vincent is right, it is handy to add a description.

### Feedback
* [x] Make a two column layout when you open the content.
* [x] Give consistent marigins.
* [x] Make sure the examples are also having a  description.

# Principles of User Interface Design
During the design and construction of the website, I applied several principles.  
The principles are intended to help the user on the website.

## 2. Interfaces exist to enable interaction
I make sure that the user can use simple interaction to get more information about the topics.  

![interaction](images/interaction.gif)

## 3. Conserve attention at all costs
There is no distraction in the application the user can go through  
the application without being disturbed.

## 10. Consistency matters
The padding, margin, color, font colour, images are equal or have the  
same size, making the website look peaceful.

## 11. Strong visual hierarchies work best
Through the layout and font size, the user is easily guided through the web page.

## 13. Highlight don’t determine with color
I use color and size to attract attention on the website. I do this by using the css matrix.
The css matrix wil help you reach high fps animations.

source: https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

```css
    transform: matrix(1, 0, 0, 1, 0, 0);
```

## 14. Progressive Disclosure
By using progressive disclosure I ensure that the user only sees more  
information when he/she is interested in the subject.

![interaction](images/interaction.gif)

# Conclusion Webdesign
Through exclusive design and the principles that have been added, I am  
very satisfied with my delivery. The only thing I want to add  
is more of a CMD like feel. It is now aimed at  
the minor web development but the style is very much based on  
minimalism, and I think there could be an extra layer of style  
over it to make it feel more exclusive.

# Web app from scratch
To complement the web app from scratch, I chose to make it more  
modular and give it a more "app" feel. During this process I 
discovered that sometimes it is difficult to apply the right techniques client-side.  
I'll elaborate on that in more detail in a moment.

## HyperHTML
To make it more modular and make it look like an app,  
I used `hyperHTML`. `HyperHTML` is a micro-lib that helps with these tasks.
In addition, I also used the Hyperhtml app. Hyperhtml app ensures that  
the routing is handled, this looks like how express does its routing.

I also want to give a special thanks to [Kevin](https://github.com/kyunwang)
with helping me with indexing the data.

<details>
    <summary>Component based</summary>

    ```javascript
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

    export default Introduction 

    ```

</details>

<details>
    <summary>Template rendering</summary>
    <p> By mapping my data, I get back objects containing the corresponding data. This is because I include an index.</p>

    ```javascript
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
                    <a href='https://codepen.io/' target='blank'class='btn inline-block'> Another example link <i class='fa fa-chevron-right' aria-hidden='true'></i></a>
                </div>                   
            </section>
            </li>`)
        }
        </ul>
    ```

<details>