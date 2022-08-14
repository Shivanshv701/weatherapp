import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from "react-dom/client";
import { act } from 'react-dom/test-utils';
import Footer from './Header/Footer'
import SignUp from './components/SignUp';
import Edit from './components/Edit'


describe('Testing React App',()=>{

  let element;
  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });

  test("Should Have 'Email' text in Edit Component", ()=>{
    render(<BrowserRouter><Edit /></BrowserRouter>);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  test('Should have 3 div in Footer component', () => {
    act(() => {
      createRoot(element).render(<Footer />);
    });
    const count = element.querySelectorAll('div').length;
    expect(count).toBe(3);
  });

  test('Should have 1 ul in Forecast component', () => {
    act(() => {
      createRoot(element).render(<Footer />);
    });
    const count = element.querySelectorAll('ul').length;
    expect(count).toBe(1);
  });

  test("Should Have 'Register' text in Register Component",()=>{
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("Should Have 'Register' text in Register Component",()=>{
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    expect(screen.getByText("Already Registered?")).toBeInTheDocument();
  });

  test("Should Have 'Email' text in Signup Component", ()=>{
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });
  
  test("Should Have 'Password' text in Signup Component", ()=>{
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  test("Should Have 'Edit Profile' text in Edit Component", ()=>{
    render(<BrowserRouter><Edit /></BrowserRouter>);
    expect(screen.getByText("Edit Profie")).toBeInTheDocument();
  });


});

