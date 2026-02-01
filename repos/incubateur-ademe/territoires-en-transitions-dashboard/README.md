# Dashboard PAP – Streamlit

Ce projet est une migration d'un notebook Datalore vers une application Streamlit modulaire.

## Démarrage

1. Créez un environnement Python 3.10+ (idéalement via venv ou conda)
2. Installez les dépendances:

```bash
pip install -r requirements.txt
```

3. Lancez l'app:

```bash
streamlit run app.py
```

4. Ouvrez l'URL indiquée dans la console (généralement `http://localhost:8501`).

## Architecture

- `app.py`: page d'accueil et configuration globale
- `pages/`: pages thématiques
  - `01_📈_Weekly.py`: indicateurs hebdomadaires (nouveaux PAP)
  - `02_🏆_Champions.py`: top évolutions hebdo et radars comparés
  - `03_🚀_MEP_et_Cycle.py`: métriques d'usage (pilotes, référents, partages)
  - `04_🎯_Score_PAP.py`: radar de score par plan
- `utils/`
  - `data.py`: chargeurs de données à brancher sur vos sources (SQL/CSV/API)
  - `plots.py`: fonctions Plotly réutilisables (radar, aires cumulatives, indicateurs)

## Brancher vos données

Remplacez les fonctions `load_df_*` de `utils/data.py` par vos requêtes ou lectures de fichiers.
Schémas attendus:
- `load_df_pap()`: `passage_pap`, `nom_plan`, `plan`, `collectivite_id`, `nom`, `import`
- `load_df_ct()`: `collectivite_id`, `passage_pap`, `nom`, `import`
- `load_df_pap_notes()`: `semaine`, `plan_id`, `collectivite_id`, `score`, `score_pilotabilite`, `score_indicateur`, `score_objectif`, `score_referentiel`, `score_avancement`, `score_budget`, `nom_ct`, `nom`, `c_referentiel`
- `load_df_plan_pilote()`: `created_at`, `user_id`, `plan_id`, `collectivite_id`, `nom`
- `load_df_plan_referent()`: `created_at`, `user_id`, `plan_id`, `collectivite_id`, `nom`
- `load_df_sharing()`: `created_at`, `collectivite_id`
- `load_df_score_indicateur()`: `collectivite_id`, `action_id`

Si vous partez de SQL, vous pouvez utiliser `sqlalchemy`/`psycopg` et retourner des DataFrame pandas.


## Personnalisation

- Couleurs, tailles, et formats des graphiques: modifiez `utils/plots.py`
- Ajoutez des pages: créez un nouveau fichier dans `pages/` en suivant le pattern
- Mise en prod: Streamlit Cloud, Docker, ou un serveur interne

## Limitations

- Les widgets ipywidgets et `display(Markdown)` du notebook ont été remplacés par des composants Streamlit (sélecteurs, `st.plotly_chart`, `st.markdown`).
- Les appels directs SQL dans le notebook sont remplacés par des loaders stub; branchez vos sources réelles.


