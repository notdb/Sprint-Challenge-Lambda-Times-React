- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are used to check and see if the passed prop has the correct type. For example a parent's component prop should pass an array to a child component. we can use proptypes to check and see if that's actually the case. They also help another developer looking at the code understand what's going on faster.

- [ ] Describe a life-cycle event in React?
A life-cycle event explains what a component should be doing either mounting, updating (probalby rerendering because state has changed) or unmounting (stopping ongoing requests or events of some sort)

- [ ] Explain the details of a Higher Order Component?
A higher order component takes a another component or two as arguments and renders them. It's useful if you want to tell react which component to render based on some condition, or if you want to create a skeleton component to render other components from.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
You can use plain CSS like a normal person. You can also use styled-components, which let you write the css in the same file, and you also get prop passing as another benefit. Styled Components will give you some reusability on larger projects. You can also use css preprocessors such as sass/less. Additionally, if you need pre-made components there are libraries such as reactstrap which give you pre-made components.