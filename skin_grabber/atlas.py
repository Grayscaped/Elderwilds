from pathlib import Path
from math import ceil, sqrt
from PIL import Image
import json
import argparse


def create_atlas(input_dir, output_image="atlas.png", output_json="atlas.json", padding=2):
    input_dir = Path(input_dir)

    images = []
    for file in sorted(input_dir.glob("*.png")):
        img = Image.open(file).convert("RGBA")
        images.append((file.name, img))

    if not images:
        raise ValueError("No PNG files found.")

    # Largest sprite dimensions
    max_w = max(img.width for _, img in images)
    max_h = max(img.height for _, img in images)

    # Square-ish grid
    cols = ceil(sqrt(len(images)))
    rows = ceil(len(images) / cols)

    atlas_w = cols * (max_w + padding) - padding
    atlas_h = rows * (max_h + padding) - padding

    atlas = Image.new("RGBA", (atlas_w, atlas_h), (0, 0, 0, 0))

    metadata = {}

    for i, (name, img) in enumerate(images):
        col = i % cols
        row = i // cols

        x = col * (max_w + padding)
        y = row * (max_h + padding)

        atlas.paste(img, (x, y))

        metadata[name.split(".")[0]] = {
            "x": x,
            "y": y,
            "width": img.width,
            "height": img.height,
        }

    atlas.save(output_image)

    with open(output_json, "w") as f:
        json.dump(metadata, f, indent=4)

    print(f"Atlas saved to {output_image}")
    print(f"Metadata saved to {output_json}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Create a PNG atlas.")
    parser.add_argument("directory", help="Directory containing PNG files")
    parser.add_argument("-o", "--output", default="atlas.png", help="Output atlas image")
    parser.add_argument("-m", "--metadata", default="atlas.json", help="Output JSON metadata")
    parser.add_argument("-p", "--padding", type=int, default=2, help="Padding between sprites")

    args = parser.parse_args()

    create_atlas(
        args.directory,
        output_image=args.output,
        output_json=args.metadata,
        padding=args.padding,
    )
