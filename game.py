class Game:
    def __init__(self):
        self.x = 0
        self.v = 1

    def step(self):
        self.x += self.v
        return self.x