import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostList from './features/posts/PostList';
import AddPostForm from "./features/posts/AddPostForm";
import  SinglePostPage  from "./features/posts/SinglePostPage";
import  EditPostForm  from "./features/posts/EditPostForm";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
              <AddPostForm />
               <PostList /> 
              </>
            )}
          />
          <Route exact path="/posts/:id" component={SinglePostPage}/>
          <Route exact path="/editPost/:id" component={EditPostForm}/>
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
     
    </Router>
  )
}

export default App
