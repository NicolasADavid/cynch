import './App.css';

import { Prompt } from './ui/views/prompt/Prompt';
import { Nav } from './ui/components/Nav/Nav';
import { Greeting } from './ui/components/Greeting/Greeting';

function App() {
    return (
        <div className='background'>
            <div className="App">
                <div className='Nav'>
                    < Nav />
                </div>
                <div className='Greeting'>
                    < Greeting/>
                </div>
                <div className='Prompt'>
                    < Prompt/>
                </div>
            </div>
        </div>
    )
}

export default App;
