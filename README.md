# 💬 Next   IA – Chatbot IA contextuel basé sur les sites Web

Dans cette application, vous découvrirez un chatbot intelligent capable d’interagir avec **le contenu de n’importe quel site web**, avec une mise en place moderne et responsive. Ce projet est inspiré du tutoriel vidéo : il allie **intelligence artificielle**, **extraction de contenu**, **vectorisation** et **UI soignée**.

---

## 🚀 Fonctionnalités principales

- 🔗 **Indexation automatique** des liens (ex. Wikipédia)
- 🧠 **IA contextuelle** : le chatbot comprend et se base sur le contenu des pages indexées
- 💾 **Sessions persistantes** grâce à Redis
- 🌙 **Thème personnalisable** avec DaisyUI (thème "abyss")
- 📱 **Interface responsive**, optimisée mobile

---

## 🧰 Stack technique

| Côté | Technologie |
|------|-------------|
| Backend | NestJS |
| Frontend | React (Next.js) |
| UI / Design | TailwindCSS + DaisyUI |
| IA / LLM | Meta LLaMA 3 (ou OpenAI GPT) via `@upstash/rag-chat` |
| Stockage contextuel | Redis + Redis Vector |
| Auth/session | Cookies (`crypto.randomUUID`) |

---

## 🧱 Architecture & composants

### 🧩 Extraction + Indexation
- Décodage d’URL via `reconstructUrl()`
- Si l’URL n’a pas encore été indexée :
  - Extraction du contenu HTML
  - Découpage en chunks (chunkSize: 200, overlap: 50)
  - Stockage dans Redis vectorielle (`indexed-urls`)

### 💬 Interface de Chat
- `Chat.tsx` : Composant principal connecté à l’API
- Textarea plein format, bouton stylisé (flèche)
- Messages alignés selon l’origine (utilisateur ou IA)

### 💡 Composants clés
- `MessageList` : liste de tous les messages pour une session donnée
- `Message` : affichage dynamique (arrondi, couleur, alignement)
- `App.tsx` : affichage du lien actuel + composant de chat

---

## 📦 Installation & démarrage

```bash
git clone git@github.com:Abde21-dev/next_ia.git
cd next_ia
npm install
