from googletrans import Translator

translator = Translator()

def detect_language(text):
    """
    Detects the language of the given text.
    Returns the detected language code (e.g., 'en', 'hi', 'es').
    """
    detection = translator.detect(text)
    return detection.lang

def translate_to_english(text):
    """
    Translates input text to English.
    """
    translation = translator.translate(text, dest='en')
    return translation.text

def translate_from_english(text, target_lang):
    """
    Translates English text to the target language.
    """
    translation = translator.translate(text, dest=target_lang)
    return translation.text




