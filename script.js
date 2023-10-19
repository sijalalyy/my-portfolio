const taglines = [
    "I'm a Software Engineer",
    "I'm a Tech Fanatic",
    "I'm an Enterprenuer"

];

const typewriterElement = document.getElementById('typewriter');
let currentTaglineIndex = 0;
let currentCharacterIndex = 0;

function typeNextCharacter() {
    const currentTagline = taglines[currentTaglineIndex];
    const currentCharacter = currentTagline[currentCharacterIndex];

    if (currentCharacter) {
        typewriterElement.textContent += currentCharacter;
        currentCharacterIndex++;
        setTimeout(typeNextCharacter, 100); // Adjust typing speed
    } else {
        setTimeout(eraseTagline, 1500); // Time before erasing
    }
}

function eraseTagline() {
    const currentTagline = taglines[currentTaglineIndex];

    if (currentCharacterIndex > 0) {
        typewriterElement.textContent = currentTagline.substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
        setTimeout(eraseTagline, 50); // Adjust erasing speed
    } else {
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        setTimeout(typeNextCharacter, 500); // Time before typing the next tagline
    }
}

// Start the typewriter effect
typeNextCharacter();
