import React,{useState} from 'react'
import './App.css';
import React_tab from './Components/React_tab';
import Materia_react_tab from './Components/Materia_react_tab'
import React_pagination from './Components/React_pagination';
import React_toggle from './Components/React_toggle';
import Popup from './Components/Popup';
import React_popup from './Components/React_popup';
import Calander from './Components/Calander';
//import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import "react-datepicker/dist/react-datepicker.css";
 import 'react-nice-dates/build/style.css'
import Dropdown from './Components/Dropdown';
import Memo from './Components/Memo';
import Moment from './Components/Moment';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ReactQueary from './Components/ReactQueary';
import Schedule from './Components/Schedule';
import React_virtualized from './Components/React_virtualized';
import Checkbox from './Components/Checkbox';
import Hoc from './Components/Hoc';
const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

const tabContent = [
  {
    title: "Why is the sky blue?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
   
  },
  {
    title: "What's It Like Inside Jupiter?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
  },
  {
    title: "What Is a Black Hole?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
  },
];

const queryClient = new QueryClient()
const App = () => {
  return(
    <>
  <div className="wrapper">
  
       {tabContent.map((tab, idx) => (
                <Accordion key={idx} title={tab.title}>
                  {tab.content}
                </Accordion>
              ))}
              
  
  </div>
  <React_tab/>
  <Hoc/>
  <Materia_react_tab/>
  <React_pagination/>
  <React_toggle/>
  <React_popup/>
  <Calander/>
  <Dropdown/>
  <Memo/>
  <Moment/>
  <Checkbox/>
  <QueryClientProvider client={queryClient}>
       <ReactQueary />
     </QueryClientProvider>
     {/* <Schedule/> */}
     <React_virtualized/>
  </>
  );
}

export default App;

// import './App.css';
// import React, { Component } from "react";
// import SimpleReactValidator from 'simple-react-validator';
// import Select from 'react-select';
// import Form from './Form';
// class App extends Component { 
//   componentDidMount() 
//   {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(response => response.json())
// .then(users => this.setState({users:users}))
//   }
//   constructor(props){
//     super(props);
   
//     this.state={
//       email:"",
//       review:"",
//       username:"",
//       password:"",
//       cpassword:"",
//       users:[],
//       selectedOption: null,
//      options : [
//         { value: 'chocolate', label: 'Chocolate' },
//         { value: 'strawberry', label: 'Strawberry' },
//         { value: 'vanilla', label: 'Vanilla' },
//       ]
//     }
   
//     this.validator = new SimpleReactValidator({autoForceUpdate:this,

//       validators: {
//         text: {  // name the rule

//           message: 'Please use a valid name ',
//           rule: (val, params, validator) => {
//             return validator.helpers.testRegex(val, /^([a-zA-Z ' -]*)$/i) && params.indexOf(val) === -1
//           },
//         // optional
//           required: true  // optional
//         },
//         emails: {  // name the rule

//           message: 'Please use a valid emails ',
         
//           rule: (val, params, validator) => {
//             return validator.helpers.testRegex(val, /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i) && params.indexOf(val) === -1
//           },
//         // optional
//           required: true  // optional
//         },
//         password: {  // name the rule

//           message: 'Please use a valid password 8 up ',
//           rule: (val, params, validator) => {
//             return validator.helpers.testRegex(val, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i) && params.indexOf(val) === -1
//           },
//         // optional
//           required: true  // optional
//         }
//       }
//     });
//   }

//   // componentWillMount=() =>{
//   //   this.validator = new SimpleReactValidator({
//   //     messages: {
//   //       email: "Invalid mail Id",
//   //       // OR
//   //       // will override all messages
//   //     },
//   //   });
//   // }
  
//   handelChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     });
// }
// handleChanges = selectedOption => {
//   this.setState({ selectedOption });
//   console.log(`Option selected:`, selectedOption);
// };
// submitForm = (e) => {
//   e.preventDefault()
 
//   if (this.validator.allValid()) {
//     alert('You submitted the form and stuff!');
//     this.setState({ email:"",
//     review:"",
//     username:"",
//     password:"",
//     cpassword:""})
//     this.validator.hideMessages();
//   } 
//   // if (this.validator.fieldValid('email')) {
//   //   this.setState({email:" "})
//   //   this.validator.hideMessages();
//   // }
//   else {
//     this.validator.showMessages();
//     // rerender to show messages for the first time
//     // you can use the autoForceUpdate option to do this automatically`
//     this.forceUpdate();
//   }
  
// }
//   render() {
//     return (
//       <>
//       <div className="container">
      
//         <h1>Write a Review</h1>
//         <div className="form-group">
//         <label>Email</label>
//         <input type="text" className="form-control" id="email" autocomplete="off" placeholder="Email" required="" name="email" value={this.state.email} onChange={this.handelChange}  />
//         <span style={{color : 'red'}}>   {this.validator.message('email', this.state.email, 'required|emails')} </span>
//         </div>
//         <div className="form-group">
//         <label>name</label>
//         <input type="text" className="form-control" id="uname" autocomplete="off" placeholder="username" required="" name="username" value={this.state.username} onChange={this.handelChange} />
//         <span style={{color : 'red'}}>   {this.validator.message('username', this.state.username, 'required|text')} </span>
//         </div>
//         <div className="form-group">
//         <label>Review</label>
//         <textarea className="form-control" name="review" autocomplete="off" value={this.state.review} onChange={this.handelChange} />
//         <span style={{color : 'red'}}>    {this.validator.message('review', this.state.review, 'required|min:10|max:15')}</span>
//        </div>
//        <div className="form-group">
//         <label>password</label>
//         <input type="password" className="form-control"autocomplete="off"  name="password" value={this.state.password} onChange={this.handelChange} />
//         <span style={{color : 'red'}}>    {this.validator.message('review', this.state.password, 'required|password')}</span>
//        </div>
//        <div className="form-group">
//         <label>cpassword</label>
//         <input type="password" className="form-control" autocomplete="off" name="cpassword" value={this.state.cpassword} onChange={this.handelChange} />
//         <span style={{color : 'red'}}>   {this.validator.message('review', this.state.cpassword, 'required|password')}</span>
//        </div>

//        <div className="form-group">
//        <label>Data</label>
//        <select>
//        {
//          this.state.users.map(user=><option value="user.value">{user.email}</option>)
//        }
//        </select>
//        </div>


//        <div className="form-group">
//        <label>Multi-select</label>
//       <Select
//       defaultValue={[this.state.options[0],this.state.options[1]]}
//         // value={this.state.selectedOption}
//         onChange={this.handleChanges}
//         options={this.state.options}
//         isMulti
//       />
//        </div>
//         <button className="btn btn-primary" onClick={this.submitForm}>Save Review</button>
       
//       </div>
    

//    </>
//     );
//   }

//  }

// export default App;
