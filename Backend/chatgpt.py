import openai
import sys
import json
import os
from dotenv import load_dotenv

load_dotenv()

def get_chat_response(user_message):
    openai.api_key = os.getenv('API_KEY')
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message},
        ]
    )
    
    return response.choices[0].message['content']

if __name__ == "__main__":
    user_message = sys.argv[1]
    response = get_chat_response(user_message)
    print(json.dumps({"response": response}))
