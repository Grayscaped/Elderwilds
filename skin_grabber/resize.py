from pathlib import Path
from PIL import Image

directory = Path("images")

for png_file in directory.glob("*.png"):
    with Image.open(png_file) as img:
        new_size = (img.width // 2, img.height // 2)
        resized = img.resize(new_size, Image.Resampling.LANCZOS)
        resized.save(png_file)

print("Done!")
