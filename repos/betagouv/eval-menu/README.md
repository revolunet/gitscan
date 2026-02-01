# eval-menu

Évaluation en terme d'impact environnemental et santé d’un menu.

## Aspects techniques

### Dépendences

- `uv` : https://docs.astral.sh/uv/
- Postgres

### Installation

1. `git clone https://github.com/betagouv/eval-menu`
2. Installer les dépendences
3. Installer les packages python : `uv sync`
4. Initialiser la base : `uv run evalmenu/manage.py migrate`
5. Charger les données pas défaut `uv run evalmenu/manage.py loaddata evalmenu/data/fixtures/ingredients.json evalmenu/data/fixtures/recettes.json evalmenu/data/fixtures/recettes-ingredients.json`
6. Démarrer `uv run evalmenu/manage.py runserver`
