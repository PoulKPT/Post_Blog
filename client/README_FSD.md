# Проект: Блог (FSD + React + Redux)

## Описание

Это учебный проект — блог на React + TypeScript, реализованный по архитектуре Feature-Sliced Design (FSD). 
В проекте используются Redux Toolkit для управления состоянием, серверный поиск, кастомные реакции, адаптивная верстка и максимально чистая структура.

---

## Архитектура: Feature-Sliced Design (FSD)

### Основные слои и их назначение

- **app/** — инициализация приложения, роутинг, провайдеры, store
- **pages/** — страницы (route-level), каждая страница — отдельная папка
- **widgets/** — крупные независимые блоки, собирающие несколько features/entities
- **features/** — отдельные фичи, пользовательские сценарии (поиск, реакция и т.д.)
- **entities/** — бизнес-сущности (Post, Reaction), их типы, api, slice
- **shared/** — переиспользуемые компоненты, утилиты, стили, типы, конфиги
- **assets/** — статические ресурсы (картинки, иконки)

---

## Пример структуры

```
src/
  app/
    App.tsx
    router.tsx
    store.ts
  pages/
    posts/PostsPage.tsx
    post/PostPage.tsx
  widgets/
    PostsList/PostsList.tsx
    PostReactions/PostReactions.tsx
  features/
    SearchPost/SearchPost.tsx
  entities/
    post/types.ts
    post/api.ts
    reaction/slice.ts
  shared/
    ui/
    lib/
    types/
    config/
  assets/
```

---

## Правила именования
- Папки и файлы — **camelCase** или **kebab-case** (например, `PostReactions`, `searchPost`)
- Компоненты — **PascalCase**
- Типы — с большой буквы (`Post`, `ReactionType`)
- Redux slice — `имяСущности/slice.ts`
- API — `имяСущности/api.ts`

---

## Best practices
- Каждый слой отвечает только за свою зону ответственности
- Не импортируй напрямую из глубины других слоёв (например, из widgets в features)
- Все бизнес-данные и логику — в entities
- Все пользовательские сценарии — в features
- Все крупные блоки — в widgets
- Все route-level страницы — в pages
- Все провайдеры, роутинг, store — в app
- Все общее и переиспользуемое — в shared
- Не храни логику или данные в pages — только сборка из widgets/features
- Используй Redux только для того, что реально нужно синхронизировать между слоями/страницами
- Для стилей: можно использовать CSS-in-JS, модули или просто inline-стили (главное — не фреймворки)

---

## Как расширять проект
- Новая бизнес-сущность — новая папка в entities
- Новый сценарий — новая папка в features
- Новый крупный блок — новая папка в widgets
- Новая страница — новая папка в pages
- Общие компоненты/утилиты — в shared

---

## Как запустить проект

1. **Установите зависимости:**
   ```bash
   npm install
   ```
2. **Запустите dev-сервер:**
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

---

## Контакты и поддержка
Если есть вопросы по архитектуре или best practices — смело пиши!


