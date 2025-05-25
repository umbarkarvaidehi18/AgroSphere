from src.recorder import record_audio
from src.stt import transcribe_audio
from src.nlp import preprocess_text
from src.intent_recognition import recognize_intent
from src.lang import detect_language, translate_to_english, translate_from_english
from src.intent_handler import handle_intent
from src.tts import speak

if __name__ == "__main__":
    # Step 1: Record user audio
    record_audio()  
    transcript = transcribe_audio() 
    if transcript:
        print(f"🎤 Transcript: {transcript}")

        # Step 3: Detect language of the user input
        detected_lang = detect_language(transcript)
        print(f"🌐 Detected Language: {detected_lang}")

        # Step 4: Translate to English if necessary
        if detected_lang != 'en':
            translated_input = translate_to_english(transcript)
            print(f"➡️ Translated to English: {translated_input}")
        else:
            translated_input = transcript

        # Step 5: Preprocess the English text
        processed_tokens = preprocess_text(translated_input)
        processed_text = " ".join([token for token, pos in processed_tokens])
        # Step 6: Recognize the intent from processed text
        intent = recognize_intent(processed_text)
        print(f"🧭 Intent Detected: {intent}")

        # Step 7: Handle the intent and get English response
        response_en = handle_intent(intent)
        print(f"💬 Response (EN): {response_en}")

        # Step 8: Translate the response back to user’s language (if not English)
        if detected_lang != 'en':
            response_translated = translate_from_english(response_en, detected_lang)
            print(f"⬅️ Translated Response: {response_translated}")
        else:
            response_translated = response_en

        # Step 9: Speak the response in the detected language
        speak(response_translated, lang=detected_lang)
