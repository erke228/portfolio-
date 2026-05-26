# Статическая версия проекта

Проект переведен с TanStack Start SSR/Cloudflare output на обычную статическую Vite + React сборку.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
```

После `npm run build` готовый сайт находится в папке `dist/`.

## GitHub Pages

1. Создай репозиторий на GitHub.
    2. Запушь проект в ветку `main`.
3. Открой `Settings -> Pages`.
4. В `Source` выбери `GitHub Actions`.

Файл `.github/workflows/deploy.yml` уже добавлен.
Он собирает проект и публикует папку `dist`.

## Что изменено

- Добавлен `index.html`.
- Добавлен `src/main.tsx`.
- Страница вынесена в `src/App.tsx`.
- `vite.config.ts` заменен на обычный статический Vite-конфиг.
- Добавлен GitHub Actions деплой.
- Добавлен `public/.nojekyll`.


## Проверено

В этой версии команда `npm run build` успешно создает `dist/index.html` и папку `dist/assets`.
