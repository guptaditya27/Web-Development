import readline from 'readline';
import GeminiChat from './Api_integ.js';

const chat = new GeminiChat();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('🤖 Gemini Chat - Type your message (type "exit" to quit)\n');

const askQuestion = () => {
  rl.question('You: ', async (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('\nGoodbye! 👋');
      rl.close();
      return;
    }

    if (input.trim() === '') {
      askQuestion();
      return;
    }

    try {
      console.log('\n⏳ Waiting for response...\n');
      const response = await chat.chat(input);
      console.log(`AI: ${response}\n`);
    } catch (error) {
      console.error(`❌ Error: ${error.message}\n`);
    }

    askQuestion();
  });
};

askQuestion();
