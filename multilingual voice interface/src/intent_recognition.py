import re

def recognize_intent(text):
    text = text.lower().strip()

    # Basic keyword matching for simplicity
    if re.search(r"(soil moisture|moisture level|how.*soil.*moist)", text):
        return "get_soil_moisture"
    elif re.search(r"(yield forecast|predict yield|how.*yield)", text):
        return "get_yield_forecast"
    elif re.search(r"(sustainability metrics|eco stats|green index|carbon)", text):
        return "get_sustainability_metrics"
    elif re.search(r"(temperature|weather|current weather|how.*hot)", text):
        return "get_weather"
    elif re.search(r"(water requirement|irrigation|need to water)", text):
        return "get_irrigation_advice"
    elif re.search(r"(fertilizer suggestion|which fertilizer|fertilize)", text):
        return "get_fertilizer_advice"
    elif re.search(r"(hello|hi|hey)", text):
        return "greeting"
    elif re.search(r"(thank you|thanks)", text):
        return "thanks"
    else:
        return "unknown"

