
import time

from skin_grabber import download_skin
from renderer import createImage
from atlas import create_atlas

def run():
    with open("playerlist.txt") as f:
        for name in f.readlines():
            name = name.strip()
            print(name)
            try:
                download_skin(name)
                createImage(name)
                time.sleep(1)
            except:
                print("Failed")

create_atlas("images")
