import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends React.Component{
  constructor(){
    super()
    //设定初始state
    this.state={
      list:['一一一','二二二','三三三']
    }
    //推荐这种指针修改方式
    this.addTodo=this.addTodo.bind(this)
  }
  addTodo(){
    console.log(this)
    console.log(this.refs.todoVal.value)
    this.state.list.push(this.refs.todoVal.value)

    //更新页面
    this.setState({
      list:this.state.list
    })
  }
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <input type='text' ref='todoVal'></input>
        <button onClick={this.addTodo}>ADDD TODO</button>
        <button onClick={()=>{this.props.sendDataFromChild('这是来自子的数据')}}>数据从子到父的传递</button>
        <br></br>
        <ul>
         {
           //读取state
         this.state.list.map((item,index)=>{
           return <li key={index}>{item}</li>
         })
         }
        </ul>
      </div>
    )
  }
}

// TodoList.propTypes={
//   title:React.PropTypes.string 
// }

class App extends React.Component{
  constructor(){
    super()
    this.sendDataFromChild=this.sendDataFromChild.bind(this)
    this.state={
      message:'hello world'
    }
  }
  componentWillMount(){
    console.log('enter componentWillMount')

  }
  componentDidMount(){
    console.log('enter componentDidMount')

  }
  sendDataFromChild(val){
    this.setState({
      message:val
    })
  }
  render(){
    return(
      <div className='App'>
        <h1>{this.state.message}</h1>
        <TodoList title='todolist测试标题' sendDataFromChild={this.sendDataFromChild}></TodoList>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
