import React, {useState} from 'react';

const withAuth = Component => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return props => {
    if (!isAuthenticated) {
      return <div>Please log in</div>;
    }

    return <Component {...props} />;
  };
};

const MyComponent = () => {
  return <div>This is my component</div>;
};

const AuthComponent = withAuth(MyComponent);

export default AuthComponent;
