const PromptService = {
    postPrompt: async function(prompt) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        };

        const response = await fetch('http://localhost:1337/prompts', requestOptions)
            .then(response => response.json())

        return response
    }
};

export default PromptService;