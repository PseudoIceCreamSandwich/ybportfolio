from pyscript import document
import joblib


def translate_english(event):
    model = joblib.load('./House-model.joblib')
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