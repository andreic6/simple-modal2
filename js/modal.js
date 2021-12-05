 const { useReducer } = React
function App() {
 const initialState = false
function reducer(state, action) {
	         switch(action) {
			 case 'modal':
				 return state = true
			 case 'close':
				 return state = false
		         default:
				 return state
			}
}
 const[open, dispatch] = useReducer(reducer, initialState)
console.log(open)
	return (
		<div className="center">
		<button onClick={() => dispatch('modal')}>Open Modal</button>
		<div className={open ? 'modal':'close'}>
		<div className="modal-bg">
		<p className="modal-content">Hi! I am a modal</p>
		<button onClick={() => dispatch('close')}>Ok</button>
		</div>
		</div>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('mydiv'))  
