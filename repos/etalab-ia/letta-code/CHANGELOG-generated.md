## Changelog : letta-code (derniers 30 jours)

### Résumé
Cette version apporte des améliorations significatives à l'expérience utilisateur, notamment dans la gestion des agents, des outils et des conversations. De nouvelles fonctionnalités ont été ajoutées, comme le support de MiniMax K2.5, Bedrock Opus 4.5 et l'intégration de l'API OpenRouter via BYOK. Des corrections de bugs ont été implémentées pour améliorer la stabilité et la fiabilité de l'application, en particulier concernant la gestion des interruptions, des approbations et du streaming. L'ajout d'un système de hooks permet une plus grande extensibilité et personnalisation.

### Évolutions fonctionnelles
- Ajout du support pour le modèle Kimi K2.5 (#738).
- Ajout du support pour le modèle Bedrock Opus 4.5 (#722).
- Intégration de l'API OpenRouter via BYOK (#735).
- Possibilité d'activer ou de désactiver le système de fichiers mémoire (memfs) via les flags `--memfs` et `--no-memfs` (#747, #748).
- Amélioration de l'affichage des prompts dans les dialogues d'approbation (#750).
- Ajout d'un système de hooks pour étendre les fonctionnalités de l'application (#607, #657, #660, #681, #694).
- Ajout d'un outil "plan" pour la planification de tâches (#579, #589).
- Amélioration de la gestion des agents et des conversations, avec la possibilité de créer des sous-agents (#577, #581, #591).
- Ajout d'un outil "memory" pour la gestion de la mémoire de l'agent (#621, #685).
- Ajout d'un outil "skills" pour la gestion des compétences de l'agent (#612).
- Amélioration de la recherche de conversations (#627).
- Ajout de la possibilité de définir des alias de sources dans le mode bash (#604).
- Ajout d'un support LSP (TypeScript et Python) (#474).
- Ajout d'un mode "Ralph Wiggum" (#484).

### Évolutions techniques
- Refactorisation du code pour améliorer la performance et la maintenabilité (#582, #618, #629).
- Mise à jour de la dépendance `@letta-ai/letta-client` vers la version 1.7.6 (#656, #713).
- Amélioration de la gestion des erreurs et des retries (#580, #583).
- Ajout de tests d'intégration Docker (#619).
- Amélioration de la gestion des flux de streaming pour réduire le scintillement (#514, #580).
- Utilisation de conversations au lieu d'agents pour certaines opérations (#475).
- Amélioration de la gestion des interruptions et des annulations (#517, #547, #571).
- Ajout de variables d'environnement pour configurer le comportement de l'application (#502, #533).
- Amélioration de la gestion des fichiers et des images (#603, #614).

### Autres changements
- Mise à jour de la documentation README (#525, #550).
- Suppression du package AUR `letta-code-bin` (#753).
- Correction de problèmes de compatibilité avec Windows PowerShell (#482).
- Diverses corrections de bugs et améliorations de l'interface utilisateur (#501, #510, #511, #512, #515, #516, #518, #519, #520, #521, #522, #523, #524, #526, #528, #529, #530, #531, #532, #534, #535, #536, #538, #539, #540, #541, #542, #543, #544, #545, #546, #548, #549, #551, #552, #553, #554, #555, #556, #557, #558, #559, #560, #561, #562, #563, #564, #565, #566, #567, #568, #569, #570, #572, #573, #574, #575, #576, #578, #584, #585, #586, #587, #588, #590, #592, #593, #594, #595, #596, #597, #598, #599, #600, #601, #602, #606, #608, #609, #610, #611, #613, #615, #616, #617, #620, #622, #623, #624, #625, #626, #628, #630, #631, #632, #633, #634, #635, #636, #637, #638, #639, #640, #641, #642, #643, #644, #645, #646, #647, #648, #649, #650, #651, #652, #653, #654, #655, #658, #659, #661, #662, #663, #664, #665, #666, #667, #668, #669, #670, #671, #672, #673, #674, #675, #676, #677, #678, #679, #680, #682, #683, #684, #686, #687, #690, #691, #692, #693, #696, #697, #698, #699, #700, #701, #702, #703, #704, #705, #706, #707, #708, #709, #710, #711, #712, #714, #715, #716, #717, #718, #719, #720, #721, #723, #725, #726, #727, #728, #729, #730, #731, #732, #733, #734, #736, #737, #739, #740, #741, #742, #743, #744, #745, #746, #749, #752, #753, #754, #755, #756, #757, #758).
