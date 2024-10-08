import eel
from screeninfo import get_monitors

eel.init('web')

OLETUS_KAYTTAJA = "admin"
OLETUS_SALASANA = "salasana123"

@eel.expose
def kirjaudu(kayttaja, salasana):
    if kayttaja == OLETUS_KAYTTAJA and salasana == OLETUS_SALASANA:
        print(f"Kirjautuminen onnistui: {kayttaja}")
        return "Kirjautuminen onnistui!"
    else:
        print(f"Virheellinen kirjautuminen: {kayttaja}")
        return "Virheellinen käyttäjänimi tai salasana."

monitor = get_monitors()[0]
screen_width = monitor.width
screen_height = monitor.height

eel.start('index.html', size=(screen_width, screen_height), position=(0, 0))
