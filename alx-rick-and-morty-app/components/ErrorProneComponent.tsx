// this is a simple component that intentionally throws an error to test the functionality of the ErrorBoundary comp.
const ErrorProneComponent: React.FC = () => {
    throw new Error ('This is a test error!');
}

export default ErrorProneComponent;