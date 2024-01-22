import random

# This was built a little different than the example
# I noticed it at the end that I didn't take the input, I
# generated a random number to guess instead

int_target = random.randint(1,100)
int_guesses = 0
int_my_guess = -1



while(int_my_guess != int_target) :
    int_my_guess = int(input("Enter your guess from 1 to 100: "))
    int_guesses += 1
    if(0 < int_my_guess < 100) :
        # Number is within the range
        if(int_my_guess > int_target) :
            print("Too high - try again!")
        else:
            print("Too low - try again!")
    else :
        print("That number is not between 1 and 100!")

if(int_guesses > 1) :
    print(f"You guessed it in {int_guesses} tries.")
else :
    print("You guessed it in 1 try.")