install: # установить зависимости
	npm ci

brain-games: # запуск игры brain-games
	node bin/games/brain-games.js

brain-even: # запуск игры brain-even
	node bin/games/brain-even.js

brain-calc: # запуск игры brain-cal 
	node bin/games/brain-calc.js

brain-gcd: #запуск игры brain-gcd
	node bin/games/brain-gcd.js

brain-progression: #запуск игры brain-progression
	node bin/games/brain-progression

publish:
	npm publish --dry-run

lint:
	npx eslint
