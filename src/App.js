import './App.css';
import Colorpicker from './components/Colorpicker';
const colors=["red","springgreen","purple","yellow","magenta","yellowgreen",
"orangered","blue","pink","darkgreen","violet","brown","lightblue","chocolate","grey",
"aqua","blueviolet","chartreuse","saddlebrown","khaki","darkgoldenrod","salmon"];
function App() {
  return (
    <div>
      <center>
      <h3>Color Picker</h3>
      <Colorpicker colors={colors}/>
      </center>
    </div>
  );
}

export default App;
