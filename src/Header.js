import React from 'react'; 
class Header extends React.Component {
    callApi(){
        fetch('/api/getUsername') .then(
            (result) => {
                 // Get the result 
                 // If we want text, call result.text() 
                 return result; }).then((jsonResult) => { // Do something with the result console.log(jsonResult); }) } render() { return <div> <button onClick={() => this.callApi()}> Click here to call API </button> </div>; } } export default Header;
