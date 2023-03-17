install: # установить зависимости
	npm ci

brain-games: # запуск игры brain-games
	node bin/brain-games.js

brain-even: # запуск игры brain-games
	node bin/brain-even.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint
