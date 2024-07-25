import re
from community_guidelines import PROHIBITED_WORDS, SENSITIVE_TOPICS

def moderate_content(content):
    content = content.lower()
    
    # Check for prohibited words
    for word in PROHIBITED_WORDS:
        if word in content:
            return False, f"Content contains prohibited word: {word}"
    
    # Check for sensitive topics
    for topic in SENSITIVE_TOPICS:
        if topic in content:
            return True, f"Content contains sensitive topic: {topic}. Please review."
    
    return True, "Content appears to be appropriate"