def main():
    name = input('Welcome to Burger Queen! What is your name? ')
    wants_to_order = yes_or_no('Hello ' + name + ', would you like to make an order? (y/n) ')
    while wants_to_order:
        print()
        take_order()
        print()
        wants_to_order = yes_or_no('Would you like to make another order? (y/n) ')

    print('Thank you, have a good day!')


def yes_or_no(prompt):
    answer = input(prompt) + ' '
    first_letter = answer[0].lower()
    while first_letter != 'y' and first_letter != 'n':
        answer = input('Please type (y)es or (n)o ') + ' '
        first_letter = answer[0].lower()

    if first_letter == 'y':
        return True
    else:
        return False


def take_order():
    order = input('What would you like to order? ')
    print('Your order: ' + order)
    is_correct = yes_or_no('Is this correct? ')
    while not is_correct:
        order = input('Sorry, what would you like to order? ')
        print('Your order: ' + order)
        is_correct = yes_or_no('Is this correct? ')

    print('Enjoy!')


if __name__ == '__main__':
    main()