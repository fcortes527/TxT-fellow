def main():
    name = input('What is your name? ')
    wants_to_order = yes_or_no('Hello ' + name + ', may I take your order? ')
    while wants_to_order:
        print()
        take_order()
        print()
        wants_to_order = yes_or_no('Would you like to make another order? ')

    print('Thank you, have a good day!')


def yes_or_no(prompt):
    answer = input(prompt) + ' '
    answer = answer.lower()
    first_letter = answer[0]
    while first_letter != 'y' and first_letter != 'n':
        answer = input('Please type (y)es or (n)o ') + ' '
        answer = answer.lower()
        first_letter = answer[0]

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