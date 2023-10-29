from fastapi import FastAPI
from pydantic import BaseModel
import json
from model import Spotify_Recommendation  # Importing recommendation model
import numpy as np
import pandas as pd


class item(BaseModel):
    s_name: str
  
    
app = FastAPI()

sdf = pd.read_csv(r"..\ML files\CSV_files\SpotifySongs.csv")
recommendations = Spotify_Recommendation(sdf)




@app.post('/recommend')
def rec():
    with open('u_input.json','r') as input_file:
        input_data = json.load(input_file)

    song_name = input_data.get('s_name')

    if song_name:
        recommended_songs,album_cvr = recommendations.recommend(song_name)
        response = recommended_songs
    else:
        response = "Unknown song name"
    
    with open('u_output.json','w') as output_file:
        json.dump(response,output_file)
    
    with open('albm_cvr.json','w') as cvr_file:
        json.dump(album_cvr,cvr_file)

        
        



"""
from flask import Flask, request, jsonify
from model import Spotify_Recommendation  # Importing recommendation model
import numpy as np
import pandas as pd


app = Flask(__name__)


sdf = pd.read_csv(r"..\ML files\CSV_files\SpotifySongs.csv")
recommendations = Spotify_Recommendation(sdf)


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()  # input data from the JSON request

    if 'song_name' in data:
        song_name = data['song_name']
       
        # artist_name = data.get('artist_name', None)
        amount = data.get('amount', 1)  # Specify the number of recommendations, default to 1

        # Calling recommendation function
        recommended_songs, album_covers = recommendations.recommend(song_name, amount)

        # Creating a response JSON
        response = {
            'recommended_songs': recommended_songs,
            'album_covers': album_covers
        }

        #with open('output.json', 'w') as f:
        #   json.dump(response, f)

        return jsonify(response)
    else:
        return jsonify({'error': 'Please provide a song_name in the request data'})


if __name__ == '__main__':
    app.run(debug=True)
    
"""