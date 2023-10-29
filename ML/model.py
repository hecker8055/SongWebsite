import warnings
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import pickle
from tqdm import tqdm
from sklearn.preprocessing import MinMaxScaler
from sklearn.cluster import KMeans
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


sns.set()

CLIENT_ID = "70a9fb89662f4dac8d07321b259eaad7"
CLIENT_SECRET = "4d6710460d764fbbb8d8753dc094d131"

# Initialize the Spotify client
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Our dataframe
sdf = pd.read_csv(r"C:\Users\pc\Downloads\ML-ROHIT\BD-proj\SOng-web\SongWebsite\ML files\CSV_files\SpotifySongs.csv")

# selects only the numeric coloumns in our dataframe
num_sdf = sdf.select_dtypes(include=['int16', 'int32', 'int64', 'float16', 'float32', 'float64'])


# Data Transformation:
# Here basically we are altering the range of the data to fit in a specific range.
datatypes = ['int16', 'int32', 'int64', 'float16', 'float32', 'float64']  # Selecting only numerical columns
normarization = num_sdf
for col in normarization.columns:
    MinMaxScaler(col)

# We are using Clustering method "Kmeans" to cluster and provide recommendations
kmeans = KMeans(n_clusters=10)
features = kmeans.fit_predict(normarization)
sdf['features'] = features
MinMaxScaler(sdf['features'])


def album_cvr(song_name, artist_name):
    search_query = f"track:{song_name} artist:{artist_name}"
    results = sp.search(q=search_query, type="track")

    if results and results["tracks"]["items"]:
        track = results["tracks"]["items"][0]
        album_cover_url = track["album"]["images"][0]["url"]
        print(album_cover_url)
        return album_cover_url
    else:
        return "https://i.postimg.cc/0QNxYz4V/social.png"

    
class Spotify_Recommendation():

    def __init__(self, dataset):
        self.dataset = dataset

    def recommend(self, searched_song, amount=5):
        distance = []
        song = self.dataset[(self.dataset.SongName.str.lower() == searched_song.lower())].head(1).values[0]
        rec = self.dataset[self.dataset.SongName.str.lower() != searched_song.lower()]
        recommended_songs = []
        album_covers = []  # Create a list to store album cover URLs

        for songs in tqdm(rec.values):
            d = 0
            for col in np.arange(len(rec.columns)):
                if not col in [0, 1]:  # These coloumns contain categorical data , i.e , they are not numerical
                    d = d + np.absolute(float(song[col]) - float(songs[col]))
            distance.append(d)
        rec.loc[:, 'distance'] = distance

        rec = rec.sort_values('distance')
        columns = ['ArtistName', 'SongName']

         # Select and store the recommended songs and their album cover URLs
        for i in range(amount):
            recommended_song = rec[columns].iloc[i]
            recommended_songs.append(recommended_song)
            album_cover_url = album_cvr(recommended_song['SongName'], recommended_song['ArtistName'])
            album_covers.append(album_cover_url)

        rec_res = rec[columns][:amount]
        song_list = rec_res['SongName'].values.tolist()
        
        return  song_list,album_covers



#recommendations = Spotify_Recommendation(sdf)
#print(recommendations.recommend(input("song name : "), 10))

song_names_df = sdf[['SongName']]


"""
def get_recommended_songs(dataset, input_song, amount=1):
    recommendations = Spotify_Recommendation(dataset)
    recommended_songs = recommendations.recommend(input_song, amount)
    return recommended_songs
"""




