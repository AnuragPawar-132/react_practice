import React, { useReducer } from "react";

export const UseReducer = () => {

    let initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment': return { count: state.count + 1 }
            case 'decrement': return { count: state.count - 1 }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Hi from UseReducer</h1>
            <p className="text-bold">Count: {state.count}</p>
            <button className="bg-[#808080] p-[2%] m-2" onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className="bg-[#808080] p-[2%] m-2" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    )
}



// import React, { useReducer } from 'react';
// import { formReducer, initialState } from './reducer';

// export const UseReducerForm = () => {

//     const initialForm = {
//     name: '',
//     email: '',
//     age: '',
//     submitted: false
//   };
  
// const formReducer = (state, action) => {
//     switch (action.type) {
//       case 'UPDATE_FIELD':
//         return {
//           ...state,
//           [action.field]: action.value,
//         };
//       case 'RESET':
//         return initialForm;
//       case 'SUBMIT':
//         return {
//           ...state,
//           submitted: true,
//         };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   const handleChange = (e) => {
//     dispatch({
//       type: 'UPDATE_FIELD',
//       field: e.target.name,
//       value: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SUBMIT' });
//   };

//   const handleReset = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return (
//     <div className="p-4 border rounded max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">User Form</h2>
//       {state.submitted ? (
//         <div>
//           <p className="text-green-600">Form submitted successfully!</p>
//           <pre>{JSON.stringify(state, null, 2)}</pre>
//           <button onClick={handleReset} className="mt-2 px-4 py-1 bg-blue-500 text-white">
//             Reset
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Name"
//             value={state.name}
//             onChange={handleChange}
//             className="block w-full mb-2 border px-2 py-1"
//           />
//           <input
//             name="email"
//             placeholder="Email"
//             value={state.email}
//             onChange={handleChange}
//             className="block w-full mb-2 border px-2 py-1"
//           />
//           <input
//             name="age"
//             placeholder="Age"
//             value={state.age}
//             onChange={handleChange}
//             className="block w-full mb-2 border px-2 py-1"
//           />
//           <button type="submit" className="px-4 py-1 bg-green-600 text-white mr-2">
//             Submit
//           </button>
//           <button type="button" onClick={handleReset} className="px-4 py-1 bg-gray-500 text-white">
//             Reset
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };
