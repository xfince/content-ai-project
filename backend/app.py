from flask import Flask, request, jsonify
from flask_cors import CORS
from content_generator import generate_content
from content_moderator import moderate_content

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    user_prompt = request.json['prompt']
    generated_content = generate_content(user_prompt)
    moderation_result, explanation = moderate_content(generated_content)
    return jsonify({
        'content': generated_content,
        'is_appropriate': moderation_result,
        'explanation': explanation
    })

@app.route('/moderate', methods=['POST'])
def moderate():
    content = request.json['content']
    moderation_result, explanation = moderate_content(content)
    return jsonify({
        'is_appropriate': moderation_result,
        'explanation': explanation
    })

if __name__ == '__main__':
    app.run(debug=True)