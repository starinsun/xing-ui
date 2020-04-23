import React, {FC} from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

const App:FC = () => {
  return (
    <div className="App" >
      <header className="App-header" style={{margin:20}}>
        <Button onClick={()=>{console.log(1)}} className='aas'>this is a</Button>
        <br/>
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large}>this is a Button</Button>
        <br/>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>this is a Button</Button>
        <br/>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>this is a Button</Button>
        <br/>
        <Button disabled size={ButtonSize.Large}>this is a Button</Button>
        <br/>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">Baidu</Button>
      </header>
    </div>
  );
}

export default App;
