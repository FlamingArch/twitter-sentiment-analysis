from tweepy.api import API
from authentication import authenticate


def get_home_tweets(screen_name, count=20, api=API(authenticate())):
    """
    Get the user's home timeline.
    """
    tweets = api.user_timeline(
        screen_name=screen_name, count=count, tweet_mode="extended")
    return tweets


def get_hashtag_tweets(hashtag, count=20, api=API(authenticate())):
    """
    Get the tweets with the given hashtag.
    """
    tweets = api.search(q=hashtag, count=count, tweet_mode="extended")
    return tweets
