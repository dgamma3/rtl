// Example: Testing for a specific class name
test('button has correct class', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
});

const Button = () => <button className="btn-primary">Click me</button>;

const Button = () => <button className="button primary">Click me</button>;

// Example 2: Testing for a specific element type
test('user info is in a paragraph', () => {
    render(<UserInfo name="Alice" age={30} />);
    expect(screen.getByText(/Alice is 30 years old/)).toBeInstanceOf(HTMLParagraphElement);
});

// Passes:
const UserInfo = ({ name, age }) => <p>{name} is {age} years old</p>;

// Fails (false negative):
const UserInfo = ({ name, age }) => <div>{name} is {age} years old</div>;

// Example: Testing for a specific data attribute
test('todo item has correct data-id', () => {
    render(<TodoItem id={5} text="Buy milk" />);
    expect(screen.getByText('Buy milk')).toHaveAttribute('data-id', '5');
});

// Passes:
const TodoItem = ({ id, text }) => <li data-id={id}>{text}</li>;

// Fails (false negative):
const TodoItem = ({ id, text }) => <li id={`todo-${id}`}>{text}</li>;

// Example: Testing for a specific order of elements
test('navigation links are in correct order', () => {
    render(<Navigation />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('About');
    expect(links[2]).toHaveTextContent('Contact');
});

// Passes:
const Navigation = () => (
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
);

// Fails (false negative):
const Navigation = () => (
    <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </nav>
);


// Example : Testing for a specific CSS style
test('error message has red color', () => {
    render(<ErrorMessage text="Invalid input" />);
    expect(screen.getByText('Invalid input')).toHaveStyle({ color: 'red' });
});

// Passes:
const ErrorMessage = ({ text }) => <span style={{ color: 'red' }}>{text}</span>;

// Fails (false negative):
const ErrorMessage = ({ text }) => <span className="text-danger">{text}</span>;

// Example: Testing for a specific event handler name
// Test:
test('button has onClick handler', () => {
    const handleClick = jest.fn();
    render(<SubmitButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('onClick');
});

// Passes:
const SubmitButton = ({ onClick }) => <button onClick={onClick}>Submit</button>;

// Fails (false negative):
const SubmitButton = ({ onClick }) => <button onMouseDown={onClick}>Submit</button>


//Example
test('displays user info correctly', () => {
    render(<UserInfo name="Alice" age={30} />);
    const userInfo = screen.getByTestId('user-info');
    expect(userInfo).toHaveTextContent('Alice is 30 years old');
});

//Passes:
const UserInfo = ({ name, age }) => (<div data-testid="user-info">{name} is {age} years old</div>);

//Fails
const UserInfo = ({ name, age }) => (<div data-testid="user-details">{name} is {age} years old</div>);


