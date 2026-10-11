import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyDNzTNtOAEeqV1h6srSKfm_73zdiO5CoKQ',
});

class GeminiChat {
  constructor() {
    this.model = 'gemini-3-flash-preview';
    this.conversationHistory = [];
  }

  /**
   * Send a message and get response with conversation context
   * @param {string} userMessage - 
   * The user's message
   * @returns {Promise<string>} - AI response
   */
  async chat(userMessage) {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      parts: [{ text: userMessage }],
    });

    try {
      // Send entire conversation history to maintain context
      const response = await ai.models.generateContent({
        model: this.model,
        contents: this.conversationHistory,
      });

      const assistantMessage = response.text;

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'model',
        parts: [{ text: assistantMessage }],
      });

      return assistantMessage;
    } catch (error) {
      console.error('Error communicating with Gemini:', error);
      throw error;
    }
  }

  /**
   * Get conversation history
   * @returns {Array} - Full conversation history
   */
  getHistory() {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
  }
}

export default GeminiChat;
