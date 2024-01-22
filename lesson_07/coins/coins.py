int_my_cents = int(input("Enter a number from 0 to 99: "))
int_quarters = 0
int_dimes = 0
int_nickles = 0
int_pennies = 0


if(0 <= int_my_cents <= 99) :
    # Check quarters
    int_quarters = int_my_cents // 25
    int_my_cents %= 25

    int_dimes = int_my_cents // 10
    int_my_cents %= 10

    int_nickles = int_my_cents // 5
    int_my_cents %= 5

    int_pennies = int_my_cents

    print(f"Your change will be:\nQ: {int_quarters}\nD: {int_dimes}\nN: {int_nickles}\nP: {int_pennies}")
else:
    print("This is not a valid amount!")

