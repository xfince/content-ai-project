# AI Content Generator & Moderator Documentation

## 1. System Design and Architecture

**System Overview:**
This project focuses on content generation and moderation to address inappropriate and low-quality content. It is designed with a modular architecture to handle text generation using Gemini AI and content moderation using NLP techniques.

**Architecture:**

- **Frontend:**
  - **Technologies:** JavaScript, React, Node.js, Express.js
  - **Components:**
    - `public/index.html`: Main HTML file.
    - `src/App.js`: Main React component.
    - `src/components/ContentForm.js`: Component for user content submission.
    - `src/components/ModerationResult.js`: Component to display moderation results.

- **Backend:**
  - **Technologies:** Python, Flask
  - **Components:**
    - `app.py`: Main entry point, managing API routes and server logic.
    - `content_generator.py`: Handles content generation using a Generative AI model.
    - `content_moderator.py`: Manages content moderation using NLP techniques.
    - `community_guidelines.py`: Contains community guidelines for moderation.

**System Flow:**
1. User submits a prompt via the frontend `ContentForm.js`.
2. The prompt is sent to the backend (`app.py`), which invokes the content generation function (`content_generator.py`).
3. Generated content is then sent to the moderation function (`content_moderator.py`) for evaluation.
4. The moderation result, along with the generated content, is returned to the frontend and displayed in `ModerationResult.js`.

## 2. Instructions for Deploying and Using the System

**Backend Deployment:**

1. **Setup Python Environment:**
   - Ensure Python 3.x is installed.
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - **Windows:**
       ```bash
       venv\Scripts\activate
       ```
     - **macOS/Linux:**
       ```bash
       source venv/bin/activate
       ```

2. **Install Dependencies:**
   - Install required packages from `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```

3. **Run the Backend Server:**
   - Start the Flask application:
     ```bash
     cd backened
     python app.py
     ```

**Frontend Deployment:**

1. **Setup Node.js Environment:**
   - Ensure Node.js and npm are installed.

2. **Install Dependencies:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install packages from `package.json`:
     ```bash
     npm install
     ```

3. **Run the Frontend Application:**
   - Start the React application:
     ```bash
     npm start
     ```

**Integration:**

- Ensure that the frontend is configured to communicate with the backend API endpoints. Adjust API base URLs if necessary.

## 3. Explanation of the Algorithms and Models Used

**Content Generation:**
- **Model:** GEMINI AI PRO
- **Method:** Uses the `google-generativeai` library to generate text based on user prompts.

**Content Moderation:**
- **Techniques:** NLP-based moderation, including keyword-based checks and sentiment analysis.

**Community Guidelines:**
- **Purpose:** Defines rules for acceptable content to guide the moderation process.

## 4. Limitations and Potential Improvements

**Limitations:**
- **Content Generation:**
  - The quality and relevance of generated content depend on the model's training data and fine-tuning.
  - Generated content might occasionally include biases present in the training data.

- **Content Moderation:**
  - The moderation system may not catch all inappropriate content, particularly if it evolves beyond predefined keywords.
  - Sentiment analysis is basic and might not fully capture the context of content.

**Potential Improvements:**
- **Advanced Moderation Techniques:**
  - Integrate more sophisticated NLP models for better content moderation.
  - Implement context-aware moderation to understand content better.

- **User Feedback Integration:**
  - Develop a system to collect and analyze user feedback for continuous improvement of content generation and moderation.

- **Performance Optimization:**
  - Enhance response times and scalability through optimization techniques and caching strategies.

- **Model Enhancement:**
  - Regularly update and fine-tune Generative AI models to improve content quality and relevance.
 
- **NB The generation delays for a while on opening the link due to the use of render for deployment roughly less than 15 seconds after that everything works out well.**
  
## Deployment
The application is deployed on Render. You can access the live version here:
[AI Content Generator & Moderator.](https://content-ai-project-1.onrender.com)

## Further Documentation
The Google docs documentation on the project can be found:
[Google Docs.](https://docs.google.com/document/d/1qois6s9HkelGbigAZR7V02GQoM7tijVA0snLbUCT_Uo/edit?usp=sharing)

## Contributors
-**Kimani Vincent King'atua**: [Github Profile.](https://github.com/xfince)
