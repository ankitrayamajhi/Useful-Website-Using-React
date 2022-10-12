import Button from "./Button";
const App = ()=>{
 return <div>
  <h1>Useful Website</h1>
 <h3>Which website do you want to open? </h3>
 {/* <button className="button">Google</button> */}
 <Button name = "Google" link="https:/google.com"/>
 <Button name = "Facebook" link="https://www.facebook.com/"/>
 <Button name = "Youtube" link="https:/youtube.com"/>
 <br></br>
 <br></br>
 <Button name = "GitHub" link="https:/github.com"/>
 <Button name = "Instagram" link="https:/instagram.com"/>
 <Button name ="Discord"link="https:/discord.com"/>
 </div>
}

export default App;