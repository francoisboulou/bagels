const instructions = `
We will start with a three digit number. 
You will attempt to guess the number, and
I will respond to each guess as follows:

• If the guess has no numbers correct, I'll respond: "Bagel."
• For each digit the guess has correct, but in the wrong place, I'll respond: "Pico."
• For each digit the guess has correct and in the correct place, I'll respond: "Fermi."

As an example, let's say that I thought of the secret number 489.

Guess 1: 362 Bagel — no digit is correct.
Guess 2: 820 Pico — the 8 is in the wrong place.
Guess 3: 418 Pico Fermi — the 8 is in the wrong place, the 4 is in the correct place.
Guess 4: 518 Pico — the 8 is in the wrong place.
Guess 5: 487 Fermi Fermi — the 4 and 8 are in the correct place.
Guess 6: 489 Fermi Fermi Fermi — all digits are in the correct place`

export default instructions