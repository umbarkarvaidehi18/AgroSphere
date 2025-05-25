def handle_intent(intent):
    if intent == "get_soil_moisture":
        return "The current soil moisture level is 35%."
    elif intent == "get_yield_forecast":
        return "The estimated yield forecast for your crop is 2.4 tons per hectare."
    elif intent == "get_sustainability_metrics":
        return "Your farm has reduced carbon emissions by 12% this season."
    elif intent == "get_weather":
        return "The current temperature is 28°C with clear skies."
    elif intent == "get_irrigation_advice":
        return "Based on current conditions, irrigation is recommended tomorrow evening."
    elif intent == "get_fertilizer_advice":
        return "You should apply nitrogen-rich fertilizer in the next week."
    elif intent == "greeting":
        return "Hello! How can I help you with your farm today?"
    elif intent == "thanks":
        return "You're welcome! Let me know if you need anything else."
    else:
        return "Sorry, I didn't understand that. Could you please rephrase?"

