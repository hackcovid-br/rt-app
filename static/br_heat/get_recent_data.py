import csv
import requests
from contextlib import closing
import csv
import codecs

# This script should be run every time the CSV file changes (probably daily)
# This is going to minify a 2.2mb file into 932kb.
url = "https://brasil.io/dataset/covid19/caso?format=csv"

with closing(requests.get(url, stream=True)) as my_file:
    reader = csv.reader(
        codecs.iterdecode(my_file.iter_lines(), "utf-8"), delimiter=",", quotechar='"'
    )
    with open("latest_cities_shrink.csv", "w") as shrink:
        wtr_shrink = csv.writer(shrink)

        for r in reader:
            confirmed_per_100k = r[9] if r[3] in ["state", "place_type"] else ""
            place_type = r[3][0] if r[3] != "place_type" else "place_type"
     
            if r[3] in ["city", "place_type"] and r[6] in ["is_last", "True"]:
                wtr_shrink.writerow((r[4], r[5], r[8]))
