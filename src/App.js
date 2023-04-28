// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [comments, setComments] = useState([]);
//   const [replyIndex, setReplyIndex] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const user = event.target.user.value;
//     const text = event.target.comment.value;
//     const time = new Date().toLocaleString();
//     const newComment = { user, text, time, likes: 0, replies: [] };
//     console.log(newComment);
//     setComments([...comments, newComment]);
//     event.target.reset();
//   };

//   const handleLike = (commentIndex) => {
//     const newComments = [...comments];
//     newComments[commentIndex].likes++;
//     console.log(newComments);
//     setComments(newComments);
//   };

//   const handleReply = (index, event) => {
//     event.preventDefault();
//     const user = event.target.user.value;
//     const text = event.target.comment.value;
//     const time = new Date().toLocaleString();
//     const reply = { user, text, time };
//     const newComments = [...comments];
//     newComments[index].replies.push(reply);
//     setComments(newComments);
//     setReplyIndex(null);
//     event.target.reset();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="your name" name="user" required className="name"/><br/>
//         <textarea
//           name="comment"
//           placeholder="Leave a comment"
//           required
//           className="area"
//         ></textarea><br/>
//         <button type="submit" className="button">Submit</button>
//       </form>
//       {comments.map((comment, index) => (
//         <div key={index}>
//           <p>
//             {comment.user} at {comment.time}
//           </p>
//           <p>{comment.text}</p>
//           <button onClick={() => handleLike(index)}>
//             Like({comment.likes})
//           </button>
//           <button onClick={() => setReplyIndex(index)}>Reply</button>
//           {comment.replies.map((reply, replyIndex) => (
//             <div key={replyIndex}>
//               <p>
//                 {reply.user} at {reply.time}
//               </p>
//               <p>{reply.text}</p>
//             </div>
//           ))}
//           {replyIndex === index && (
//             <form onSubmit={(event) => handleReply(index, event)}>
//               <input type="text" name="user" placeholder="your name" required />
//               <textarea
//                 name="comment"
//                 placeholder="Leave a reply"
//                 required
//               ></textarea>
//               <button type="submit">Submit</button>
//             </form>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log("SingOut triggered");
//   }
//   render() {
//     return <button onClick={this.handleClick}>SingOut</button>;
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//          super(props);
//          this.handleClick = this.handleClick.bind(this);
//       }
//        handleClick() {
//          console.log("SingOut triggered");
//        }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>SingOut</button>;
//       </div>
//     )
//   }
// }

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[]);

//   return <h1>I've rendered {count} times!</h1>;
// }
// export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]);

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }
// export default App;

// import {useReducer} from 'react';
// const initialState = {count: 0};

// function reducer(state, action) {
//   // switch (action.type) {
//   //   case 'increment':
//   //     return {count: state.count + 1};
//   //   case 'decrement':
//   //     return {count: state.count - 1};
//   //   default:
//   //     throw new Error();
//   // }
//   if(action.type==='decrement'){
//     return{
//       count: state.count-1
//     };

//   }
//   if(action.type==='increment'){
//     return{
//       count: state.count+1
//     };

//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
// export default Counter;

// import {useReducer} from "react";
// function init(initialCount) {
//   return {count: initialCount};
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

// function Counter({initialCount}) {
//   const [state, dispatch] = useReducer(reducer, initialCount, init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({type: 'reset', payload: initialCount})}>
//         Reset
//       </button>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
// export default Counter;

// import React, { useRef } from "react";

// const UncontrolledCheckbox = () => {
//   const checkboxRef = useRef(null);

//   const handleSubmit = () => {
//     console.log(checkboxRef.current.checked);
//   };

//   return (
//     <div>
//       <input type="checkbox" ref={checkboxRef} />
//       <button type="button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default UncontrolledCheckbox;

// import React from 'react';
// import useFetch from './components/useFetch.js';

// const App = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
//   return (
//     <div>
//       {data && data.map((item)=>{
//         return <li key={item.id}>{item.title}</li>
//       })}
//     </div>
//   )
// }

// export default App

// import {useReducer} from 'react';

// function reducer(state,action){
// if(action.type==='increasingAge'){
//   return{
//     age:state.age+1
//   }
// }
// }

// const App = () => {
//   const[state, dispatch] = useReducer(reducer,{age:42});
//   return (
//     <div>
//       <button onClick={()=>{dispatch({type:"increasingAge"})}}>Click</button>
//       <p>Hello you are !{state.age}</p>
//     </div>
//   )
// }

// export default App;

// import React,{useRef} from 'react';
// import FormField from './components/FormField.js';

// const App = () => {
//   const inputref = useRef(null);
//   const findResult = () => {
//     inputref.current.focus();
//   }
//   return (
//     <form>
//       <FormField label="Enter your name" ref={inputref} isRequired={true}/>
//       <button onClick={findResult}>Edit</button>
//     </form>
//   )
// }

// export default App;

// import React from 'react';
// import FormField from './components/FormField.js';
// import MyInput from './components/MyInput.js';
// // import useFetch from './components/useFetch.js';

// const App = () => {
//   return (
//     <div>
//       <FormField/>
//       <MyInput/>
//       {/* <useFetch/> */}
//     </div>
//   )
// }

// export default App

// import React, { Component } from "react";
// import SearchResults from "./components/SearchResults";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SearchResults title="Hello dear" />
//       </div>
//     );
//   }
// }
// export default App;

// import { useCallback, useState } from "react";

// import SearchResults from "./components/SearchResults.js";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   },[todos]);

//   return (
//     <>
//       <SearchResults todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };
// export default App;

import React, {useRef} from 'react';
import MyInput from "./components/MyInput.js";

const App = () => {
  const ref = useRef(null);
  const handleSubmit = () => {
ref.current.focus();
  }
  return (
    <div>
      <form>
        <MyInput label="Enter your name" ref={ref}/>
        <button type="button" onClick={handleSubmit}>click</button>
      </form>
    </div>
  )
}

export default App