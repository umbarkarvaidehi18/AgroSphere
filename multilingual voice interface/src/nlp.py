import nltk

# Download required NLTK resources once
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

def preprocess_text(text):
    """
    Tokenize and tag parts of speech.
    Args:
        text (str): Input string (transcribed voice command).  
    Returns:
        list: List of (word, POS) tuples.
    """
    print("🔍 Preprocessing text...")
    tokens = nltk.word_tokenize(text)
    pos_tags = nltk.pos_tag(tokens)
    print(f"🧩 Tokens & POS: {pos_tags}")
    return pos_tags
