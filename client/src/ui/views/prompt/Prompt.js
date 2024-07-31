import React, {useState, useEffect} from 'react'
import './Prompt.css';
import PromptService from '../../../services/PromptService';
import { ArrowUp, Square } from 'react-feather';


export function Prompt() {

    const [promptInput, setPromptInput] = useState("");
    const [promptAnalysis, setPromptAnalysis] = useState("");

    const submitPrompt = (e) => {
    
        e.preventDefault();

        PromptService.postPrompt(promptInput)
        .then(res => {
            setPromptAnalysis(res.output)
        })    

    }

    const placeholderText = "Chat with CynchAI..."//

    return (
        <div className="Prompt">
            <form onSubmit = {submitPrompt}>

                <input onChange = {(e) => setPromptInput(e.target.value)} value = {promptInput} placeholder={placeholderText}></input>
                <button type = 'submit'>Click to submit</button>

            </form>

            <p>
                {promptAnalysis}
            </p>
            <p>asdfasdfasf</p>
        </div>
    );
}