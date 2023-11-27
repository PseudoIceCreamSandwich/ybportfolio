from pyscript import document
import joblib
from pyodide.http import open_url
from io import BytesIO
import requests
url_content = open_url('https://raw.githubusercontent.com/PseudoIceCreamSandwich/ybportfolio/main/House-model.joblib')


def translate_english(event):
    model = joblib.load(BytesIO(requests.get('https://raw.githubusercontent.com/PseudoIceCreamSandwich/ybportfolio/main/House-model.joblib').content))
    area = document.getElementById("area")
    beds = document.getElementById("beds")
    baths = document.getElementById("baths")
    year = document.getElementById("year")
    areaText = int(area.value)
    bedsText = int(beds.value)
    bathsText = int(baths.value)
    yearText = int(year.value)
    prediction = model.predict([[areaText, bedsText, bathsText, yearText]])
    output_div = document.querySelector("#output")
    output_div.innerText = int(prediction)