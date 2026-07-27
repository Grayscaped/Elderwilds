import requests
import base64
import json

def get_skin_url(username):
    # Get UUID from username
    r = requests.get(f"https://api.mojang.com/users/profiles/minecraft/{username}")

    if r.status_code != 200:
        raise ValueError("Player not found")

    uuid = r.json()["id"]

    # Get player profile
    r = requests.get(
        f"https://sessionserver.mojang.com/session/minecraft/profile/{uuid}"
    )

    profile = r.json()

    # Decode texture data
    textures = json.loads(
        base64.b64decode(profile["properties"][0]["value"]).decode("utf-8")
    )

    return textures["textures"]["SKIN"]["url"]

def download_skin(username):
    skin_url = get_skin_url(username)
    skin = requests.get(skin_url)
    with open(f"skins/{username}.png", "wb") as f:
        f.write(skin.content)
