module.exports = {


    friendlyName: 'Prompt analyzer',
  
  
    description: '',
  
  
    inputs: {
      prompt: {
          type: 'string',
          exmaple: 'What is the deal with airplane food?',
          description: 'A prompt to be analyzed by AI',
          required: true
      }
  
    },
  
  
    exits: {
  
      success: {
        description: 'All done.',
      },
  
    },
  
  
    fn: async function (inputs, exits) {
  
      const classifications = ["Positive", "Neutral", "Negative"]
      const randomClassification = classifications[Math.floor(Math.random() * classifications.length)];
  
      return exits.success(randomClassification)
    }
  
  
  };
  
  