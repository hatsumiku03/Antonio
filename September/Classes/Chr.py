class Character:
    def __init__(self, name, gender, category, game):
        self.name = name
        self.gender = gender
        self.category = category
        self.game = game
    
    def info(self):
        return f"{self.name} | {self.gender} | {self.category} | {self.game}"




chr1 = Character("Dante", "Hombre", "Devil", "Devil My Cry")

print(chr1.info())