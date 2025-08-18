import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundery";

function App() {
  return (
    <>
      <ErrorBoundary>
        <TaskProvider>
          <Router>
            <div className="App">
              <header
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  padding: "20px",
                }}
              >
                <h1>Task Manager App</h1>
              </header>
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<TaskList />} />
                  <Route path="/create" element={<CreateTask />} />
                  <Route path="/edit/:id" element={<EditTask />} />
                </Routes>
              </main>
            </div>
          </Router>
        </TaskProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
