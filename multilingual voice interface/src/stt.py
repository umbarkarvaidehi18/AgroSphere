from pocketsphinx import AudioFile

def transcribe_audio(audio_path="assets/input.wav"):
    """
    Transcribes speech from a WAV file using PocketSphinx.
    Args:
        audio_path (str): Path to the audio file.
    Returns:
        str: Transcribed text.
    """
    config = {
        'verbose': False,
        'audio_file': audio_path,
        'samprate': 16000,
        'buffer_size': 2048,
        'no_search': False,
        'full_utt': False,
    }
    print("🧠 Transcribing audio...")
    audio = AudioFile(**config)
    transcript = ""
    for phrase in audio:
        transcript += phrase.hypothesis() + " "
    print(f"📝 Transcript: {transcript.strip()}")
    return transcript.strip()
