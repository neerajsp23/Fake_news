from detector import predict_news_rating
from flask import Flask, render_template, request,jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/getinput', methods=['POST'])
def get_input():
    # text = request.form['textBar']
    data = request.get_json()
    message = data['inputValue']
    input = predict_news_rating(message) 
    return jsonify({'validity':input[0],'rating':input[1]})

if __name__ == '__main__':
    app.run(debug=True)
