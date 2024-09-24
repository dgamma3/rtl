// ExampleComponent.js
import React from 'react';

// Example 1: Button Component
export const Button = () => (
    <button data-testid="submit-btn" onClick={() => console.log('Clicked!')}>
        Submit
    </button>
);

// Example 2: Input Component
export const Input = () => (
    <input data-testid="username-input" placeholder="Enter your username" />
);

// Example 3: Checkbox Component
export const Checkbox = () => (
    <input type="checkbox" data-testid="accept-checkbox" />
);

// Example 4: Form Component
export const Form = () => (
    <form data-testid="login-form">
        <input data-testid="email" />
        <input type="password" data-testid="password" />
    </form>
);

// Example 5: Heading Component
export const Heading = () => <h1 data-testid="page-heading">Welcome</h1>;

// Example 6: Paragraph Component
export const Paragraph = () => (
    <p data-testid="description">This is a description.</p>
);

// Example 7: List Component
export const List = () => (
    <ul data-testid="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
);

// Example 8: Modal Component
export const Modal = () => (
    <div data-testid="modal">This is a modal</div>
);

// Example 9: Alert Component
export const Alert = () => (
    <div data-testid="alert">This is an alert</div>
);

// Example 10: Icon Component
export const Icon = () => (
    <i data-testid="user-icon" className="icon-user"></i>
);
