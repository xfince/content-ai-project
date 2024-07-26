import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from .env file
load_dotenv()

# Initialize the Gemini API using the API key from .env
api_key = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

def generate_content(prompt):
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"Error generating content: {e}")
        return "Sorry, I couldn't generate content at this time."