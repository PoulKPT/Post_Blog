# Проект: Блог (FSD + React + Redux)
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

## Структура

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

