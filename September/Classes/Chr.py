class Character:
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender
    
    def info(self):
        return f"Name: {self.name} | Gender: {self.gender}"


class Hunter(Character):
    def __init__(self, name, gender, weapon, masterRank):
        super().__init__(name, gender)
        self.weapon = weapon
        self.masterRank= masterRank
    
    def info(self):
        return f"{super().info()} | Weapon: {self.weapon} | Master Rank: {self.masterRank}"
    
    def setWeapon(self, weapon):
        self.weapon = weapon
        
    def getWeapon(self):
        print(f"{self.weapon}")

hunter1 = Hunter("Lyra", "Female", "Dual Blades", 7)

hunter1.setWeapon("Long Sword")

"""print(hunter1.info())"""

hunter1.getWeapon