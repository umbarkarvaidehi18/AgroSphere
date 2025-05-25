from gtts import gTTS
import os
import tempfile
import platform
import subprocess

def speak(text, lang='en'):
    print(f"🗣️ Speaking (gTTS): {text}")
    
    # Create temporary file
    with tempfile.NamedTemporaryFile(delete=True, suffix=".mp3") as fp:
        tts = gTTS(text=text, lang=lang)
        tts.save(fp.name)
        
        # Play audio using default system player
        if platform.system() == "Darwin":  # macOS
            subprocess.call(["afplay", fp.name])
        elif platform.system() == "Linux":
            subprocess.call(["mpg123", fp.name])
        elif platform.system() == "Windows":
            os.system(f'start {fp.name}')
