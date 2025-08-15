from flask import Flask, request, jsonify
import json

app = Flask(__name__)
GAME_STATE_FILE = "game_states.json"

@app.route('/update_game_state', methods=['POST'])
def update_game_state():
    data = request.json
    game = data.get("game")
    status = data.get("status")

    with open(GAME_STATE_FILE, "r") as f:
        states = json.load(f)

    states[game] = status

    with open(GAME_STATE_FILE, "w") as f:
        json.dump(states, f)

    return jsonify({"message": f"{game} updated to {status}"}), 200
