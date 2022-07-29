// 7.28
// 설치 
// 1. npm install redux		    --> node_modules에  redux폴더 살펴보기 --> .ts로 끝나는 애가 있음(index.d.ts) --> typescript를 지원하는 애임!
// 2. npm install react-redux	--> node_modules에  redux폴더 살펴보기 --> .ts로 끝나는 애가 없음 --> typescript를 지원하지 않는 애임! 
// 			                      ==> 그래서 typescript 적용되도록 설치 해줘야함 -->npm install @types/react-redux 설치해주기!!
// 3. npm install @types/react-redux
// 7.29
// 4. npm install typesafe-actions 💜💛
// 5. npm install redux-thunk    or  yarn add redux-thunk
// 6. npm install axios 💖

//7.28
import React from 'react';
import './App.css';
// import ContainerCounter from './containers/ContainerCounter';
// import TodoApp from './containers/TodoApp';
//7.29
import GithubProfileLoader from './containers/GithubProfileLoader';


function App() {
  return (
    <div className="App">
      {/* <ContainerCounter/>
      <TodoApp /> */}
      
      <GithubProfileLoader/>
    </div>
  );
}

export default App;