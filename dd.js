function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  function getGreeting(user) {
    if(user) {
      return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
  }
  
  const user = {
    firstName: 'Min',
    lastName: 'Byeongrok'
  };
  
  const element React.createElement (
    'h1',
    {className: 'greeting'},
    'hello, world! haha'
    );
  
  const root = ReactDOM.createRoot(document.getElementById('element'));
  root.render(element);
  