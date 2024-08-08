from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json
    print(data)
    # Perform your processing here
    prompt = data.get('Input')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    response = openai.ChatCompletion.create(
        model="gpt-4",
        prompt=prompt,
        max_tokens=150
    )
    print(response.choices[0].text.strip())
    return jsonify(response.choices[0].text.strip())

if __name__ == '__main__':
    app.run(port=5000)

