

from tweepy.api import API
from authentication import authenticate


def get_home_tweets(screen_name, count=20, api=API(authenticate())):
    """
    Get the user's home timeline.
    """
    tweets = api.user_timeline(screen_name=screen_name, count=count)
    return tweets
