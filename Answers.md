1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?



Object.assign()`, `Array.concat()`, `Array.map()` & `Array.filter().. you can use any of them to create a new object.

An action is an object that handles the changes from a event trigger. A reducer is a function that handles the state. It will never update the state(current state in store) but once the state has changed the reducer will return a new/copy object of that state. The store is where we hold our state to be accessed by the reducer who is triggered by the action.

Application state can be accessed through anyb component. It is a global state within redux.
When we are not updating the state in redux would be a good time to use Component state since we are just passing the state as props.

Middleware is a ....function/action that is used as checkpoints befre the action is passed/if passed to the reducer.

Redux is synchronus . thunk allows us to flow through in an asynchronus manner by utilizing promises.

connect links the components
