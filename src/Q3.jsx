// 3. Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

//     Data:

//     ```jsx
//     const userData = {  name: 'John',  age: 25,  email: 'john@example.com',}
//     ```

//     COPY

export default function UserProfile({ heading, userObj }) {
  const { name, age, email } = userObj;
  return (
    <>
      <h2>{heading}</h2>
      <p>
        Name: {name}
        <br />
        Age: {age}
        <br />
        Email: {email}
      </p>
    </>
  );
}
