import google.generativeai as genai

# Initialize the Gemini API (you'll need to add your API key)
genai.configure(api_key='YOUR_GEMINI_API_KEY')
model = genai.GenerativeModel('gemini-pro')

def generate_content(prompt):
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"Error generating content: {e}")
        return "Sorry, I couldn't generate content at this time."