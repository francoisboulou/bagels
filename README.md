# Bagels

Please go to https://francoisboulou.github.io/bagels/ for the live version. A version of the Pico, Fermi, Bagel number game, built with React, bootstrapped with create-react-app.

I am a fan of the Web Developer Roadmap (https://hackernoon.com/the-2019-web-developer-roadmap-ab89ac3c380e) and attempt to cover a few concepts in it with every project. The main ideas/technologies covered in this project are:

* React basics (components, state, lifecycle methods)
* ES6 syntax (arrow funtcions, promises, map/filter/reduce)
* Use of NPM and YARN package managers
* Linters (ESLint and Prettier)
* Minor use of APIs (Random.org)


 # Some Things I've Learned on This Project

* Writing components as well as instantly exported functions in React 
* Managing state and using callbacks to pass information to parent components
* Used knowledge of component lifecycle methods and ES6 features to interact with API (Axios module)
* Separating my logic and presentation by creating conditional rendering functions above the Render method in my components

# Some Challenges

* Finding a workaround to Chrome's new autoplay restrictions was a bit difficult, but I was able to find a reasonable solution through looking over online resources. 
* Managing focus between input elements and the illegal move alert overlay. Adding ENTER key functionality to close the alert overlay was easy enough, but became problematic when I tried to return focus to input field after the unmounting of the overlay element. shifting focus to a button inside the overlay and interpreting ENTER as a click was the solution I went with. 
* At times I found it easier to use old JS syntax (a traditional for loop instead of map or for of/each), and will be reformatting over time to clean up these instances.

# Things Left to Do

* Refine my code for performance, and to adhere to React conventions (~adding keys to array items~, further refining component hierarchy, and avoiding direct DOM manipulations)
* Add arrow key navigation functionality to start menu for more classic game experience
* Add simple animations for interaction with difficulty options, instructions, and illegal move alerts (highlighted items flash when selected, fade ins/outs for overlays or another similar transition)
* Adding sound effects to play actions and win/lose screen to enhance the play experience


# Other considerations

I have intentionally left mobile formatting and accessibility concerns out of my to-do list for this project, as its main intention is to display my knowledge of React and ES6.

I subscribe to the idea of Continous Refactoring. As I become a more adept and agile developer, my perception of my work will change and I will make changes accordingly. I believe that the ability to stick with an old project even while creating new things is a valuable skill in the workplace, and I aim to display that here. I hope my commit history speaks for itself!   
