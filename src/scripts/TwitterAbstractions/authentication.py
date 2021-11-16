import json
from tweepy import OAuthHandler

# Create a twitter_credentials.py in following format and fill in the values
# API_KEY = ""
# API_KEY_SECRET = ""
# BEARER_TOKEN = ""
# ACCESS_TOKEN = ""
# ACCESS_TOKEN_SECRET = ""
# CONSUMER_KEY = API_KEY
# CONSUMER_SECRET = API_KEY_SECRET
import twitter_credentials


def authenticate():
    auth = OAuthHandler(
        twitter_credentials.CONSUMER_KEY,
        twitter_credentials.CONSUMER_SECRET
    )
    auth.set_access_token(
        twitter_credentials.ACCESS_TOKEN,
        twitter_credentials.ACCESS_TOKEN_SECRET
    )
    return auth
