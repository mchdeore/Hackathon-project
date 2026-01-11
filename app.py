from flask import Flask, render_template
from game import Game


app = Flask(__name__)
# create the app object from the Flask class

@app.route('/')
# for the route / (ie the home page)
def index():
    # execute the index function
    # functions can do anything you want called at the route
    return render_template('index.html')
# return the rendered template index.html

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/rules')
def rules():
    return render_template('rules.html')

@app.route('/game')
def game():
    return render_template('game.html')


if __name__ == '__main__':
    #has to stay at bottom so that app is defined before running
    app.run(debug=True)