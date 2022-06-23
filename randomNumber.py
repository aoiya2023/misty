import random

choice = [1,2,3]

res = []
for i in range(100):
    res += [random.choice(choice)]

with open('conditionAssignment.txt', 'w') as file:
    for num in res:
        file.write(str(num))
        file.write('\n')
