/**
 * PromptController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async analyzePrompt(req,res){

        promptAnalysis = await sails.helpers.promptAnalyzer.with({
            prompt: req.body.prompt,
          });

        try {
            let createdRecord = await Prompt.create({
                input: req.body.prompt,
                output: promptAnalysis
            }).fetch();
        } catch (error) {
            console.log(error)
        }

        response = {
            input: req.body.prompt,
            output: promptAnalysis
        }

        return res.json(response)
    }
  
};

