import sounddevice as sd
from scipy.io.wavfile import write
import numpy as np

def record_audio(filename="assets/input.wav", duration=5, fs=16000):
    """
    Record audio from microphone and save it as WAV. 
    Args:
        filename (str): Path to save the recorded audio.
        duration (int): Duration of recording in seconds.
        fs (int): Sample rate (16000 Hz is required for PocketSphinx).
    """
    print(f"🎤 Recording for {duration} seconds...")
    recording = sd.rec(int(duration * fs), samplerate=fs, channels=1, dtype=np.int16)
    sd.wait()  # Wait until recording is finished
    write(filename, fs, recording)
    print(f"✅ Audio saved to {filename}")
