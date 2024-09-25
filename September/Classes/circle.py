import math

class Circle:
    def __init__(self, r, area):
        self.r = r
        self.area = area

    def calculateArea(self):
        self.area = math.pi * self.r ** 2
        return self.area


circle1 = Circle(5,0)

circle1.calculateArea

print(circle1.calculateArea())